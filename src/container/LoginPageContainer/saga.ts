import { takeLatest } from 'redux-saga/effects'
import { loginPageContainerTypes } from './reducer'

export function* requestUserSignout() {
  try {
    yield alert('saga executed')
  } catch (error) {
    alert('Saga failed')
  }
}
export default function* authenticatorSaga() {
  yield takeLatest(loginPageContainerTypes.RESET, requestUserSignout)
}
