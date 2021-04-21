import { Auth } from 'aws-amplify'
import { getResponse } from '../utils/apiUtils'

interface IUserSignInTypes {
  username: string
  password: string
}

export const userSignIn = (payload: IUserSignInTypes) => {
  const { username, password } = payload
  return getResponse(() => Auth.signIn({ username, password }))
}
