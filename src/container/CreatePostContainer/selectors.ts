import { createSelector } from 'reselect'
import { initialState } from './reducer'
import get from 'lodash/get'

const selectCreatePostContainer = (state: any) =>
  state.createPostContainer || initialState

export const selectLoading = () =>
  createSelector(
    selectCreatePostContainer,
    (substate: any) => get(substate, 'loading') as boolean
  )
