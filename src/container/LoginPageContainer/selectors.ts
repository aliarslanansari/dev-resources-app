import { createSelector } from 'reselect'
import { initialState } from './reducer'
import get from 'lodash/get'

const selectAuthenticatorDomain = (state: any) =>
  state.loginPageContainer || initialState

export const selectIsLoggedIn = () =>
  createSelector(selectAuthenticatorDomain, (substate: any) =>
    get(substate, 'isLoggedIn')
  )
