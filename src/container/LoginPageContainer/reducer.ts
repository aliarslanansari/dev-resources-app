/*
 *
 * Authenticator reducer
 *
 */
import produce from 'immer'
import { createActions } from 'reduxsauce'
import { AnyAction } from 'redux'

export const initialState = {
  isLoggedIn: false,
  loading: false,
  user: {},
  error: {}
}

export const {
  Types: loginPageContainerTypes,
  Creators: loginPageContainerCreators
} = createActions({
  requestLogin: ['payload'],
  successLogin: ['payload'],
  failureLogin: ['payload'],
  requestUserLogout: ['payload'],
  successUserLogout: ['payload'],
  failureUserLogout: ['payload']
})

/* eslint-disable default-case, no-param-reassign */
export const loginPageContainer = (state = initialState, action: AnyAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case loginPageContainerTypes.REQUEST_LOGIN:
        draft['loading'] = true
        draft['isLoggedIn'] = false
        break
      case loginPageContainerTypes.SUCCESS_LOGIN:
        draft['loading'] = false
        draft['isLoggedIn'] = true
        draft['user'] = action.payload.user
        break
      case loginPageContainerTypes.FAILURE_LOGIN:
        draft['error'] = action.payload
        draft['loading'] = false
        draft['isLoggedIn'] = false
        break
      case loginPageContainerTypes.REQUEST_USER_LOGOUT:
        draft['loading'] = true
        break
      case loginPageContainerTypes.SUCCESS_USER_LOGOUT:
        draft['loading'] = true
        draft['isLoggedIn'] = false
        draft['user'] = {}
        break
      case loginPageContainerTypes.FAILURE_USER_LOGOUT:
        draft['loading'] = true
        break
      default:
        return draft
    }
  })

export default loginPageContainer
