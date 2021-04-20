import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0A192F',
      main: '#112240',
      dark: '#0A192F',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#64FFDA',
      contrastText: '#ffffff'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1rem'
      }
    }
  }
})
