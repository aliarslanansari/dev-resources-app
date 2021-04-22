import history from '../utils/history'
import configureStore from './configureStore'
const initialState = {}
export const { store, persistor } = configureStore(initialState, history)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
