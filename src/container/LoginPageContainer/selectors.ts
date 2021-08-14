import { createSelector } from 'reselect'
import { initialState } from './reducer'
import get from 'lodash/get'

const selectLoginContainer = (state: any) =>
  state.loginPageContainer || initialState

export const selectAttributes = () =>
  createSelector(
    selectLoginContainer,
    (substate: any) => get(substate, 'attributes') as UserAttributes
  )

export const selectIsLoggedIn = (isLoggedIn?: boolean) =>
  createSelector(selectLoginContainer, (substate: any) =>
    isLoggedIn !== undefined
      ? isLoggedIn
      : (get(substate, 'isLoggedIn') as boolean)
  )

export const selectLoading = () =>
  createSelector(
    selectLoginContainer,
    (substate: any) => get(substate, 'loading') as boolean
  )

// export const selectIsTokenExpired = () =>
//   createSelector(selectLoginContainer, (subState) => {
//     const exp = get(
//       subState,
//       'user.signInUserSession.idToken.payload.exp',
//       undefined
//     )
//     return isTokenExpired(exp)
//   })
