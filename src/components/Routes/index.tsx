import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RouteConfig } from '../../types'

interface RoutePropsTypes {
  routeConfig: RouteConfig
}

const Routes = (props: RoutePropsTypes) => {
  const { routeConfig } = props
  return (
    <Switch>
      {Object.keys(routeConfig).map((routeKey, index) => {
        return (
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
