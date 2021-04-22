import { createStore, applyMiddleware, compose } from 'redux'
import { createInjectorsEnhancer } from 'redux-injectors'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import immutableTransform from 'redux-persist-transform-immutable'
import { BrowserHistory } from '../utils/history'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import createReducer from './rootReducer'

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  blacklist: ['router'],
  storage
}

const persistedReducer = persistReducer(persistConfig, createReducer())

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const configureStore = (initialState: Object, history: BrowserHistory) => {
  let composeEnhancers = compose
  const reduxSagaMonitorOptions = {}
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      //@ts-ignore
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    }
  }
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const runSaga = sagaMiddleware.run
  const injectEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga
  })

  const middlewares = [sagaMiddleware, routerMiddleware(history)]

  const enhancers = [applyMiddleware(...middlewares), injectEnhancer]

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers)
  )

  let persistor = persistStore(store)
  return { store, persistor }
}

export default configureStore
