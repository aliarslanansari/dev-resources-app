interface IUserSignInTypes {
  username: string
  password: string
}

type LoginReturnType = AuthUserLoginResponseError | AuthUserLoginResponse

interface ICompleteNewPassword {
  user: AuthUserLoginResponse
  password: string
}
interface AuthUserLoginResponseError {
  __type: string
  message: string
}

interface AuthUserLoginResponse {
  username: string
  pool: Pool
  Session: string
  client: Client
  signInUserSession: null
  authenticationFlowType: string
  storage: Storage
  keyPrefix: string
  userDataKey: string
  challengeName: string
  challengeParam: ChallengeParam
}

interface ChallengeParam {
  userAttributes: UserAttributes
  requiredAttributes: any[]
}

interface UserAttributes {
  email: string
}

interface Client {
  endpoint: string
  fetchOptions: FetchOptions
}

interface FetchOptions {}

interface Pool {
  userPoolId: string
  clientId: string
  client: Client
  advancedSecurityDataCollectionFlag: boolean
  storage: Storage
}

interface Storage {
  [key: string]: string
}
