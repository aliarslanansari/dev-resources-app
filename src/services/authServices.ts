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

export const userSignup = (payload: IUserSignup) => {
  const { name, password, username } = payload
  return getResponse(() =>
    Auth.signUp({
      username,
      password,
      attributes: {
        email: username,
        name
      },
      validationData: []
    })
  )
}

export const confirmSignUp = ({ username, code }: IUserSignupConfirmation) => {
  return getResponse(() => Auth.confirmSignUp(username, code))
}

export const resendSignUpVerificationCode = (username: string) => {
  return getResponse(() => Auth.resendSignUp(username))
}
