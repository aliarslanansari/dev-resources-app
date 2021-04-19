import React from 'react'
import PageLayout from '../../components/PageLayout'
import AppBar from '@material-ui/core/AppBar'
import AppNavBar from '../../components/AppNavBar'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../theme'

const AppContainer = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppNavBar />
        <PageLayout>h1ss</PageLayout>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default AppContainer
