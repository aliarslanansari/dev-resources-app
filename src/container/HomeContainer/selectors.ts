import { createSelector } from 'reselect'
import { initialState } from './reducer'
import get from 'lodash/get'
import { ListPostQueryItemsTypes } from '../../services/types'

const selectHomeContainer = (state: any) =>
  state.homeContainerReducer || initialState

export const selectAllPosts = () =>
  createSelector(
    selectHomeContainer,
    (substate: any) => get(substate, 'allPosts') as ListPostQueryItemsTypes
  )

export const selectLoading = () =>
  createSelector(
    selectHomeContainer,
    (substate: any) => get(substate, 'loading') as boolean
  )
