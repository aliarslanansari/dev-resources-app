import { AnyAction } from 'redux'
import { createActions } from 'reduxsauce'
import { produce } from 'immer'

export const initialState = {
  allPosts: [],
  currentUsersPosts: [],
  loading: false,
  error: null
}

export const {
  Types: HomeContainerTypes,
  Creators: HomeContainerCreators
} = createActions({
  requestFetchPosts: ['payload'],
  successFetchPosts: ['payload'],
  failureFetchPosts: ['payload']
})

export const registerUserContainerReducer = (
  state = initialState,
  action: AnyAction
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case HomeContainerTypes.REQUEST_FETCH_POSTS:
        draft.loading = true
        return draft
      case HomeContainerTypes.SUCCESS_FETCH_POSTS:
        draft.loading = false
        draft.allPosts = action.payload
        draft.error = null
        return draft
      case HomeContainerTypes.FAILURE_FETCH_POSTS:
        draft.loading = false
        draft.error = action.payload
        return draft
      default:
        return draft
    }
  })

export default registerUserContainerReducer
