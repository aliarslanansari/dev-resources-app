// import { RedirectTo } from './components/RedirectTo'
import { RouteConfig } from './types'
import lazyLoader from './utils/lazyLoader'

export const routeConfig: RouteConfig = {
  post: {
    render: lazyLoader(() => import('./container/PostDetails')),
    exact: true,
    path: '/post/:postId'
  },
  login: {
    render: lazyLoader(() => import('./container/LoginPageContainer')),
    path: '/login',
    exact: true
  },
  register: {
    render: lazyLoader(() => import('./container/RegisterUserContainer')),
    path: '/register',
    exact: true
  },
  homePage: {
    render: lazyLoader(() => import('./container/HomeContainer')),
    exact: true,
    path: '/'
  },
  createPost: {
    render: lazyLoader(() => import('./container/CreatePostContainer')),
    exact: true,
    path: '/create-post',
    isProtected: true
  },
  notFoundPage: {
    render: lazyLoader(() => import('./components/PageNotFound')),
    path: '/*'
  }
}
