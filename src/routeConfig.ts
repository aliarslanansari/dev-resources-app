// import { RedirectTo } from './components/RedirectTo'
import { RouteConfig } from './types'
import lazyLoader from './utils/lazyLoader'

export const routeConfig: RouteConfig = {
  login: {
    render: lazyLoader(() => import('./container/LoginPageContainer')),
    path: '/login',
    exact: true
  },
  homePage: {
    render: lazyLoader(() => import('./container/HomeContainer')),
    exact: true,
    path: '/'
  },
  notFoundPage: {
    render: lazyLoader(() => import('./components/PageNotFound')),
    path: '/*'
  }
}
