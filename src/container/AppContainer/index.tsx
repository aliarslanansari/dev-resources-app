import React from 'react'
import PageLayout from '../../components/PageLayout'
import AppNavBar from '../AppNavBar'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../theme'
import Routes from '../../components/Routes'
import { PersistGate } from 'redux-persist/integration/react'
import { routeConfig } from '../../routeConfig'
import { ApolloProvider } from 'react-apollo'
import { createAndConfigureAppSyncClient } from '../../utils/apiUtils'
import awsConfig from '../../aws-exports'
import { Provider } from 'react-redux'
import store, { persistor } from '../../store'
import { BrowserRouter } from 'react-router-dom'

const appSyncClient = createAndConfigureAppSyncClient(awsConfig)

const AppContainer = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={appSyncClient}>
              <ThemeProvider theme={theme}>
                <AppNavBar />
                <PageLayout>
                  <Routes routeConfig={routeConfig} />
                </PageLayout>
              </ThemeProvider>
            </ApolloProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default AppContainer
