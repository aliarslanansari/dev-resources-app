/*
 *
 * Authenticator reducer
 *
 */
import produce from 'immer'
import { createActions } from 'reduxsauce'
import { AnyAction } from 'redux'

export const initialState = {
  loadingComment: false,
  commentRes: null
}

export const {
  Types: postDetailsTypes,
  Creators: postDetailsCreators
} = createActions({
  requestCreateComment: ['payload'],
  successCreateComment: ['payload'],
  failureCreateComment: ['payload']
})

export const postDetailsContainer = (state = initialState, action: AnyAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case postDetailsTypes.REQUEST_CREATE_COMMENT:
        draft.loadingComment = true
        draft.commentRes = null
        return draft
      case postDetailsTypes.SUCCESS_CREATE_COMMENT:
        draft.loadingComment = false
        draft.commentRes = action.payload
        return draft
      case postDetailsTypes.FAILURE_CREATE_COMMENT:
        draft.loadingComment = false
        draft.commentRes = null
        return draft
      default:
        return draft
    }
  })

export default postDetailsContainer
