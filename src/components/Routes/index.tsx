import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { selectIsLoggedIn } from '../../container/LoginPageContainer/selectors'
import { RouteConfig } from '../../types'

interface RoutePropsTypes {
  routeConfig: RouteConfig
  isLoggedIn?: boolean
}

const Routes = (props: RoutePropsTypes) => {
  const { routeConfig } = props
  const isLoggedIn = useSelector(selectIsLoggedIn(props.isLoggedIn))
  return (
    <Switch>
      {Object.keys(routeConfig).map((routeKey, index) => {
        if (routeConfig[routeKey].isProtected && !isLoggedIn) {
          return (
            <Redirect
              key={`login-${index}`}
              to={`${routeConfig.login.path}?redirectURL=${routeConfig[routeKey].path}`}
            />
          )
        } else {
          return (
            <Route
              exact={routeConfig[routeKey].exact}
              key={index}
              path={routeConfig[routeKey].path}
              render={routeConfig[routeKey].render}
            />
          )
        }
      })}
    </Switch>
  )
}

export default memo(Routes)
