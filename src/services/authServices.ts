import { Auth } from 'aws-amplify'

interface IUserSignInTypes {
  username: string
  password: string
}

export const userSignIn = (payload: IUserSignInTypes) => {
  const { username, password } = payload
  return () => Auth.signIn({ username, password })
}
