import { toast } from 'material-react-toastify'
import { AnyAction } from 'redux'
import { call, put, takeLatest } from 'typed-redux-saga'
import { fetchPosts } from '../../services/postServices'
import { toastConfigration } from '../AppNavBar/toastConstants'
import { HomeContainerCreators, HomeContainerTypes } from './reducer'
import get from 'lodash/get'

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

export default function* homeContainerSaga() {
  yield* takeLatest(HomeContainerTypes.REQUEST_FETCH_POSTS, requestFetchPosts)
}
