import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../utils/history'
import loginPageContainer from '../container/LoginPageContainer/reducer'

export default function createReducer() {
  const appReducer = combineReducers({
    router: connectRouter(history),
    loginPageContainer
  })

  const rootReducer = (state: any, action: any) => {
    // if (
    //   action.type === authenticatorTypes.SUCCESS_USER_SIGNOUT ||
    //   action.type === authenticatorTypes.FAILURE_USER_SIGNOUT
    // ) {
    //   state = undefined
    // }
    return appReducer(state, action)
  }
  return rootReducer
}
