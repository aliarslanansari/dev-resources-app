import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import store from '../../../store'
import { RouteConfig } from '../../../types'
import Routes from '../index'

const routeConfig: RouteConfig = {
  login: {
    path: '/login',
    render: () => <h1 data-testid='login-test'>Login</h1>,
    exact: true
  },
  createPost: {
    path: '/createPost',
    render: () => <h1 data-testid='createPost-test'>createPost</h1>,
    exact: true,
    isProtected: true
  }
}

describe('<DRButton />', () => {
  it('should render and match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/createPost']}>
          <Routes isLoggedIn={true} routeConfig={routeConfig} />
        </MemoryRouter>
      </Provider>
    )
    expect(container).toMatchSnapshot()
  })

  it('should redirect to login page if not logged in', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/createPost']}>
          <Routes isLoggedIn={false} routeConfig={routeConfig} />
        </MemoryRouter>
      </Provider>
    )
    expect(getAllByTestId('login-test').length).toBe(1)
  })
  it('should allow to access page page if logged in', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/createPost']}>
          <Routes isLoggedIn={true} routeConfig={routeConfig} />
        </MemoryRouter>
      </Provider>
    )
    expect(getAllByTestId('createPost-test').length).toBe(1)
  })
})
