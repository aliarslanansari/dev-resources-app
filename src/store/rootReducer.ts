import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../utils/history'
import loginPageContainer from '../container/LoginPageContainer/reducer'
import registerUserContainerReducer from '../container/RegisterUserContainer/reducer'
import homeContainerReducer from '../container/HomeContainer/reducer'
import createPostContainer from '../container/CreatePostContainer/reducer'
import postDetailsContainer from '../container/PostDetails/reducer'

export default function createReducer() {
  const appReducer = combineReducers({
    router: connectRouter(history),
    loginPageContainer,
    registerUserContainerReducer,
    homeContainerReducer,
    createPostContainer,
    postDetailsContainer
  })

  const rootReducer = (state: any, action: any) => {
    // if (
    //   action.type === loginPageContainerTypes.SUCCESS_USER_LOGOUT ||
    //   action.type === loginPageContainerTypes.FAILURE_USER_LOGOUT
    // ) {
    //   state = undefined
    // }
    return appReducer(state, action)
  }
  return rootReducer
}
