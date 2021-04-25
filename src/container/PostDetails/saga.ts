import { postDetailsCreators, postDetailsTypes } from './reducer'
import { takeLatest, call, put } from 'typed-redux-saga'
import { AnyAction } from 'redux'
import { createComment } from '../../services/postServices'
import { toast } from 'material-react-toastify'
import { toastConfigration } from '../AppNavBar/toastConstants'

export function* requestCreateComment(action: AnyAction) {
  const { postId, content } = action.payload
  try {
    const res = yield* call(createComment, {
      input: { content: content, postID: postId }
    })
    toast.success('Comment Added Successfully', toastConfigration)
    yield* put(postDetailsCreators.successCreateComment(res))
  } catch (error) {
    toast.error(error.message, toastConfigration)
    yield* put(postDetailsCreators.failureCreateComment(error.message))
  }
}
export default function* postDetailsSaga() {
  yield* takeLatest(
    postDetailsTypes.REQUEST_CREATE_COMMENT,
    requestCreateComment
  )
}
