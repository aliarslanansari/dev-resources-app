import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { selectIsLoggedIn } from '../../container/LoginPageContainer/selectors'
import { RouteConfig } from '../../types'

interface RoutePropsTypes {
  routeConfig: RouteConfig
}

const Routes = (props: RoutePropsTypes) => {
  const { routeConfig } = props
  const isLoggedIn = useSelector(selectIsLoggedIn())
  return (
    <Switch>
      {Object.keys(routeConfig).map((routeKey, index) => {
        return routeConfig[routeKey].isProtected && !isLoggedIn ? (
          <Redirect
            to={`${routeConfig.login.path}?redirectURL=${routeConfig[routeKey].path}`}
          />
        ) : (
          <Route
            exact={routeConfig[routeKey].exact}
            key={index}
            path={routeConfig[routeKey].path}
            render={routeConfig[routeKey].render}
          />
        )
      })}
    </Switch>
  )
}

export default Routes
