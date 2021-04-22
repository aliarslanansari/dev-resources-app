/*
 *
 * Authenticator reducer
 *
 */
import produce from 'immer'
import { createActions } from 'reduxsauce'
import { AnyAction } from 'redux'

export const initialState = { isLoggedIn: false }

export const {
  Types: loginPageContainerTypes,
  Creators: loginPageContainerCreators
} = createActions({
  reset: ['payload'],
  resetHello: ['payload']
})

/* eslint-disable default-case, no-param-reassign */
export const loginPageContainer = (state = initialState, action: AnyAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case loginPageContainerTypes.RESET:
        draft.isLoggedIn = true
        break
      default:
        return draft
    }
  })

export default loginPageContainer
