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
    //@todo: will be taken care later is required
    // const challengeName = get(user, 'challengeName', undefined)
    // if (challengeName === 'NEW_PASSWORD_REQUIRED') {
    //   yield* call(completeNewPassword, {
    //     user,
    //     password: action.payload.password
    //   })
    // }
    console.log(JSON.stringify(user, null, 2))
    yield* put(loginPageContainerCreators.successLogin({ user }))
  } catch (error) {
    yield* put(loginPageContainerCreators.failureLogin(error.message))
  }
}

export function* requestUserSignout() {
  try {
    alert('sd')
    yield call(userSignOut)
    alert('sd')
    yield put(loginPageContainerCreators.successUserLogout())
  } catch (error) {
    yield put(loginPageContainerCreators.failureUserLogout(error.message))
  }
}
export default function* authenticatorSaga() {
  yield takeLatest(loginPageContainerTypes.REQUEST_LOGIN, requestLogin)
  yield takeLatest(
    loginPageContainerTypes.REQUEST_USER_LOGOUT,
    requestUserSignout
  )
}
