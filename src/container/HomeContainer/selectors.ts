import { createSelector } from 'reselect'
import { initialState } from './reducer'
import get from 'lodash/get'

const selectHomeContainer = (state: any) =>
  state.homeContainerReducer || initialState

export const selectAllPosts = () =>
  createSelector(
    selectHomeContainer,
    (substate: any) => get(substate, 'allPosts') as any[]
  )

export const selectPostById = (id: string) =>
  createSelector(selectHomeContainer, (substate: any) => {
    const allPosts = get(substate, 'allPosts') as ListPostQueryItemsTypes
    return allPosts?.find((item) => item?.id === id)
  })

export const selectPostCurrentPost = () =>
  createSelector(selectHomeContainer, (substate: any) =>
    get(substate, 'currentPost')
  )
export const selectLoading = () =>
  createSelector(
    selectHomeContainer,
    (substate: any) => get(substate, 'loading') as boolean
  )
