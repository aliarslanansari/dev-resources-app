import { createSelector } from 'reselect'
import { initialState } from './reducer'
import get from 'lodash/get'

const selectAuthenticatorDomain = (state: any) =>
  state.loginPageContainer || initialState

export const selectAttributes = () =>
  createSelector(
    selectAuthenticatorDomain,
    (substate: any) => get(substate, 'attributes') as UserAttributes
  )

export const selectIsLoggedIn = () =>
  createSelector(
    selectAuthenticatorDomain,
    (substate: any) => get(substate, 'isLoggedIn') as boolean
  )

export const selectLoading = () =>
  createSelector(
    selectAuthenticatorDomain,
    (substate: any) => get(substate, 'loading') as boolean
  )
