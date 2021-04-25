import { createSelector } from 'reselect'
import { initialState } from './reducer'
import get from 'lodash/get'

const selectPostDetails = (state: any) =>
  state.postDetailsContainer || initialState

export const selectLoadingForComment = () =>
  createSelector(
    selectPostDetails,
    (substate: any) => get(substate, 'loadingComment') as boolean
  )

export const selectCommentRes = () =>
  createSelector(
    selectPostDetails,
    (substate: any) => get(substate, 'commentRes') as boolean
  )
