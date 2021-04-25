import { toast } from 'material-react-toastify'
import { AnyAction } from 'redux'
import { call, put, select, takeLatest } from 'typed-redux-saga'
import { fetchPosts, fetchPostById } from '../../services/postServices'
import { toastConfigration } from '../AppNavBar/toastConstants'
import { HomeContainerCreators, HomeContainerTypes } from './reducer'
import get from 'lodash/get'
import { selectPostById, selectAllPosts } from './selectors'

export function* requestFetchPosts(action: AnyAction) {
  try {
    const res = yield* call(fetchPosts, {})
    const allPosts = get(res, 'data.listPosts.items', undefined)
    yield* put(HomeContainerCreators.successFetchPosts(allPosts))
  } catch (error) {
    toast.error(error.message, toastConfigration)
    yield* put(HomeContainerCreators.failureFetchPosts(error.message))
  }
}

export function* fetchPostByIdSaga(action: AnyAction) {
  try {
    const post = yield* select(selectPostById(action.payload.postId))
    const allPost = yield* select(selectAllPosts())
    if (post) {
      yield* put(HomeContainerCreators.successFetchPost(allPost))
    } else {
      const res = yield* call(fetchPostById, { id: action.payload.postId })
      const fetchedPost = get(res, 'data.getPost', undefined)
      yield* put(
        HomeContainerCreators.successFetchPost([...allPost, fetchedPost])
      )
    }
  } catch (error) {
    toast.error(error.message, toastConfigration)
    yield* put(HomeContainerCreators.failureFetchPost(error.message))
  }
}

export default function* homeContainerSaga() {
  yield* takeLatest(HomeContainerTypes.REQUEST_FETCH_POSTS, requestFetchPosts)
  yield* takeLatest(HomeContainerTypes.REQUEST_FETCH_POST, fetchPostByIdSaga)
}
