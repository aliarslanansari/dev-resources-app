import { createSelector } from 'reselect'
import { initialState } from './reducer'
import get from 'lodash/get'

const selectRegisterUserContainer = (state: any) =>
  state.registerUserContainerReducer || initialState

export const selectEmailVerificationCodeSent = () =>
  createSelector(
    selectRegisterUserContainer,
    (substate: any) => get(substate, 'emailVerificationCodeSent') as boolean
  )

export const selectLoading = () =>
  createSelector(
    selectRegisterUserContainer,
    (substate: any) => get(substate, 'loading') as boolean
  )
