import { toast } from 'material-react-toastify'
import { AnyAction } from 'redux'
import { call, put, takeLatest } from 'typed-redux-saga'
import { confirmSignUp, userSignup } from '../../services/authServices'
import { toastConfigration } from '../AppNavBar/toastConstants'
import { requestLogin } from '../LoginPageContainer/saga'
import {
  registerUserContainerCreators,
  registerUserContainerTypes
} from './reducer'

export function* requestUserSignup(action: AnyAction) {
  const { name, password, username } = action.payload
  try {
    const res = yield* call(userSignup, { name, password, username })
    toast.success(
      'Verification Code has been sent to you email',
      toastConfigration
    )
    yield* put(
      registerUserContainerCreators.successEmailVerificationCodeSent(res)
    )
  } catch (error) {
    toast.error(error.message, toastConfigration)
    yield* put(
      registerUserContainerCreators.failurEmailVerificationCodeSent(
        error.message
      )
    )
  }
}

export function* requestSignUpConfirmation(action: AnyAction) {
  const { code, username } = action.payload
  try {
    yield* call(confirmSignUp, { username, code })
    toast.success('Account Verified Successfully', toastConfigration)
    yield* call(requestLogin, action)
    yield* put(
      registerUserContainerCreators.successUserSignUp({
        ...action.payload,
        userSignupSuccess: true
      })
    )
  } catch (error) {
    yield* put(registerUserContainerCreators.failureUserSignUp(error))
    toast.error(error.message, toastConfigration)
  }
}

export default function* authenticatorSaga() {
  yield* takeLatest(
    registerUserContainerTypes.REQUEST_USER_SIGN_UP,
    requestUserSignup
  )
  yield* takeLatest(
    registerUserContainerTypes.REQUEST_EMAIL_VERIFICATION,
    requestSignUpConfirmation
  )
}
