import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import awsConfig from '../../aws-exports'
import PageLayout from '../../components/PageLayout'
import Routes from '../../components/Routes'
import { routeConfig } from '../../routeConfig'
import store, { persistor } from '../../store'
import { theme } from '../../theme'
import { createAndConfigureAppSyncClient } from '../../utils/apiUtils'
import AppNavBar from '../AppNavBar'

const appSyncClient = createAndConfigureAppSyncClient(awsConfig)

const AppContainer = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ApolloProvider client={appSyncClient}>
              <ThemeProvider theme={theme}>
                <AppNavBar />
                <PageLayout>
                  <Routes routeConfig={routeConfig} />
                </PageLayout>
              </ThemeProvider>
            </ApolloProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.Fragment>
  )
}

export default AppContainer
