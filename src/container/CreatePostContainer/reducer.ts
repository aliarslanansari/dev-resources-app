/*
 *
 * Authenticator reducer
 *
 */
import produce from 'immer'
import { createActions } from 'reduxsauce'
import { AnyAction } from 'redux'

export const initialState = {
  loading: false,
  error: null
}

export const {
  Types: createPostContainerTypes,
  Creators: createPostContainerCreators
} = createActions({
  requestCreatePost: ['payload'],
  successCreatePost: ['payload'],
  failureCreatePost: ['payload']
})

export const homeContainerReducer = (state = initialState, action: AnyAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case createPostContainerTypes.REQUEST_CREATE_POST:
        draft.loading = true
        draft.error = null
        return draft
      case createPostContainerTypes.SUCCESS_CREATE_POST:
        draft.loading = false
        draft.error = null
        return draft
      case createPostContainerTypes.FAILURE_CREATE_POST:
        draft.loading = false
        draft.error = action.payload
        return draft
      default:
        return draft
    }
  })

export default homeContainerReducer
