import { takeLatest } from 'redux-saga/effects'

import { loginPageContainerTypes } from '../LoginPageContainer/reducer'
import { requestUserSignout } from '../LoginPageContainer/saga'

export default function* navBarSaga() {
  yield takeLatest(
    loginPageContainerTypes.REQUEST_USER_LOGOUT,
    requestUserSignout
  )
}
