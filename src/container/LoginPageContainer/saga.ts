import {
  /*completeNewPassword,*/ userSignIn,
  userSignOut
} from '../../services/authServices'
import { loginPageContainerCreators, loginPageContainerTypes } from './reducer'
import { takeLatest, call, put } from 'typed-redux-saga'
import { AnyAction } from 'redux'

export function* requestLogin(action: AnyAction) {
  try {
    const user = yield* call(userSignIn, action.payload)
    yield* put(loginPageContainerCreators.successLogin({ user }))
  } catch (error) {
    yield* put(loginPageContainerCreators.failureLogin(error.message))
  }
}

export function* requestUserSignout() {
  try {
    const res = yield* call(userSignOut)
    yield* put(loginPageContainerCreators.successUserLogout(res))
  } catch (error) {
    yield* put(loginPageContainerCreators.failureUserLogout(error.message))
  }
}
export default function* authenticatorSaga() {
  yield* takeLatest(loginPageContainerTypes.REQUEST_LOGIN, requestLogin)
  yield* takeLatest(
    loginPageContainerTypes.REQUEST_USER_LOGOUT,
    requestUserSignout
  )
}
