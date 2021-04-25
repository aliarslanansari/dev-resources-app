import { ApolloCache } from 'apollo-cache'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import Amplify, { Auth } from 'aws-amplify'
import AWSAppSyncClient, { createAppSyncLink } from 'aws-appsync'
import gql from 'graphql-tag'

let appSyncClient: any = null

export const GRAPHQL_OPERATION_TYPES = {
  mutate: 'mutation',
  query: 'query',
  subscription: 'subscription'
}

export const getClient = () => appSyncClient

export const getResponse = (apiCallFn: Function, payload?: any) =>
  apiCallFn.call(this, payload)

export const graphQlOperation = (
  operationType: string,
  operation: string,
  input: any
) => {
  const { mutate, subscription } = GRAPHQL_OPERATION_TYPES
  let operationFn = getClient().query
  if (operationType === mutate) {
    operationFn = getClient().mutate
  } else if (operationType === subscription) {
    operationFn = getClient().subsription
  }
  const variables = {
    ...input
  }
  return getResponse(operationFn, {
    [operationType]: gql(operation),
    variables: variables,
    fetchPolicy: 'no-cache'
  })
}

export const createAndConfigureAppSyncClient = (awsConfig: any) => {
  Amplify.configure(awsConfig)

  const {
    aws_appsync_graphqlEndpoint: graphQlEndPoint,
    aws_appsync_region: region,
    aws_appsync_authenticationType: authType,
    aws_appsync_apiKey
  } = awsConfig

  const jwtToken = async () =>
    (await Auth.currentSession()).getIdToken().getJwtToken()

  const authConfig = {
    type: authType,
    jwtToken: jwtToken
  }

  const apiAuthLink = createAppSyncLink({
    url: graphQlEndPoint,
    region: region,
    auth: {
      type: 'API_KEY',
      apiKey: aws_appsync_apiKey
    },
    complexObjectsCredentials: () => Auth.currentCredentials()
  })

  const cognitoUserAuthClient = createAppSyncLink({
    url: graphQlEndPoint,
    auth: authConfig,
    region: region,
    complexObjectsCredentials: () => Auth.currentCredentials()
  })

  // decide which the proper link from above to use (directional link)
  const awsLink = ApolloLink.split(
    (operation) => {
      return (
        operation.operationName.includes('List') ||
        operation.operationName.includes('Get')
      )
    },
    apiAuthLink,
    cognitoUserAuthClient
  )

  appSyncClient = new AWSAppSyncClient(
    {
      disableOffline: true,
      url: graphQlEndPoint,
      region: region,
      auth: authConfig
    },
    {
      //@ts-ignore
      cache: new InMemoryCache() as ApolloCache<NormalizedCacheObject>,
      link: ApolloLink.from([awsLink])
    }
  )

  return appSyncClient
}
