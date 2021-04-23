import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../utils/history'
import loginPageContainer, {
  loginPageContainerTypes
} from '../container/LoginPageContainer/reducer'
import registerUserContainerReducer from '../container/RegisterUserContainer/reducer'
export default function createReducer() {
  const appReducer = combineReducers({
    router: connectRouter(history),
    loginPageContainer,
    registerUserContainerReducer
  })

  const rootReducer = (state: any, action: any) => {
    if (
      action.type === loginPageContainerTypes.SUCCESS_USER_LOGOUT ||
      action.type === loginPageContainerTypes.FAILURE_USER_LOGOUT
    ) {
      state = undefined
    }
    return appReducer(state, action)
  }
  return rootReducer
}
