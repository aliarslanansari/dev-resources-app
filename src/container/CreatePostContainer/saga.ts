import { toast } from 'material-react-toastify'
import { AnyAction } from 'redux'
import { call, put, takeLatest } from 'typed-redux-saga'
import { CreatePostInput } from '../../graphql/API'
import { createPost } from '../../services/postServices'
import { toastConfigration } from '../AppNavBar/toastConstants'
import {
  createPostContainerCreators,
  createPostContainerTypes
} from './reducer'

export function* requestCreatePost(action: AnyAction) {
  const { title, description, url } = action.payload as CreatePostInput
  try {
    const res = yield* call(createPost, { input: { title, description, url } })
    toast.success('Post Created Successfully', toastConfigration)
    yield* put(createPostContainerCreators.successCreatePost(res))
  } catch (error) {
    toast.error(error.message, toastConfigration)
    yield* put(createPostContainerCreators.failureCreatePost(error.message))
  }
}

export default function* createPostContainerSaga() {
  yield* takeLatest(
    createPostContainerTypes.REQUEST_CREATE_POST,
    requestCreatePost
  )
}
