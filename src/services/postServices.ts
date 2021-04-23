import { ListPostsQueryVariables } from '../graphql/API'
import { listPosts } from '../graphql/queries'
import { graphQlOperation, GRAPHQL_OPERATION_TYPES } from '../utils/apiUtils'

const { query, mutate } = GRAPHQL_OPERATION_TYPES

export const fetchPosts = (payload: ListPostsQueryVariables) =>
  graphQlOperation(query, listPosts, payload)
