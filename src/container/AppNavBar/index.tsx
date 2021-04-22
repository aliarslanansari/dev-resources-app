import { Button, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectSaga } from 'redux-injectors'
import { loginPageContainerCreators } from '../LoginPageContainer/reducer'
import { selectIsLoggedIn } from '../LoginPageContainer/selectors'
import { routeConfig } from '../../routeConfig'
import saga from './saga'
import { withRouter } from 'react-router'
import history from '../../utils/history'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
      backgroundColor: theme.palette.primary.dark,
      flexDirection: 'row',
      alignItems: 'center',
      color: theme.palette.primary.contrastText
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      color: theme.palette.secondary.main
    },
    button: {
      color: theme.palette.secondary.main
    }
  })
)

const AppNavBar = () => {
  useInjectSaga({ key: 'navBar', saga })
  const dispatch = useDispatch()
  const classes = useStyles()
  const isLoggedIn = useSelector(selectIsLoggedIn())
  const onLoginLogoutClick = () => {
    if (isLoggedIn) {
      dispatch(loginPageContainerCreators.requestUserLogout())
    } else {
      history.push(routeConfig.login?.path)
    }
  }

  return (
    <AppBar position='fixed' className={classes.root}>
      <Typography variant='h6' className={classes.title}>
        DevResources
      </Typography>
      <div>
        {!isLoggedIn ? (
          <Button
            className={classes.button}
            size='large'
            variant='outlined'
            color='secondary'
            onClick={onLoginLogoutClick}
          >
            Login
          </Button>
        ) : (
          <Button
            className={classes.button}
            size='large'
            variant='outlined'
            color='secondary'
            onClick={onLoginLogoutClick}
          >
            Logout
          </Button>
        )}
      </div>
    </AppBar>
  )
}

export default withRouter(AppNavBar)
