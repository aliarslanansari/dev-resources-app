import { Auth } from 'aws-amplify'
import { getResponse } from '../utils/apiUtils'

export const userSignIn = (payload: IUserSignInTypes) => {
  const { username, password } = payload
  return getResponse(() => Auth.signIn({ username, password }))
}

export const completeNewPassword = (payload: ICompleteNewPassword) => {
  const { user, password } = payload
  return getResponse(() => Auth.completeNewPassword(user, password))
}

export const userSignOut = () => {
  return getResponse(() => Auth.signOut())
}
