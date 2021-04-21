import React from 'react'
import PageLayout from '../../components/PageLayout'
import AppNavBar from '../../components/AppNavBar'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../theme'
import Routes from '../../components/Routes'
import { routeConfig } from '../../routeConfig'
import { ApolloProvider } from 'react-apollo'
import { createAndConfigureAppSyncClient } from '../../utils/apiUtils'
import awsConfig from '../../aws-exports'
import { Provider } from 'react-redux'
import store from '../../store'

const appSyncClient = createAndConfigureAppSyncClient(awsConfig)

const AppContainer = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ApolloProvider client={appSyncClient}>
          <ThemeProvider theme={theme}>
            <AppNavBar />
            <PageLayout>
              <Routes routeConfig={routeConfig} />
            </PageLayout>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </React.Fragment>
  )
}

export default AppContainer
