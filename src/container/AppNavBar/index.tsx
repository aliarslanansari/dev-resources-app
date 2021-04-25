import { Button, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useInjectSaga } from 'redux-injectors'
import { loginPageContainerCreators } from '../LoginPageContainer/reducer'
import {
  selectIsLoggedIn,
  selectAttributes
} from '../LoginPageContainer/selectors'
import { routeConfig } from '../../routeConfig'
import saga from './saga'
import { useHistory, withRouter } from 'react-router'
import { ToastContainer } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'

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
    leftOptions: {
      width: '100%',
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
      color: theme.palette.secondary.main,
      cursor: 'pointer'
    },
    button: {
      color: theme.palette.secondary.main
    }
  })
)

const AppNavBar = () => {
  useInjectSaga({ key: 'navBar', saga })
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const isLoggedIn = useSelector(selectIsLoggedIn())
  const userAttributes = useSelector(selectAttributes())
  const onLoginLogoutClick = () => {
    if (isLoggedIn) {
      dispatch(loginPageContainerCreators.requestUserLogout())
    } else {
      history.push(routeConfig.login?.path)
    }
  }

  return (
    <AppBar position='fixed' className={classes.root}>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Typography
        variant='h6'
        className={classes.title}
        onClick={() => {
          if (history.location.pathname !== routeConfig.homePage?.path) {
            history.push(routeConfig.homePage?.path)
          }
        }}
      >
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
          <div className={classes.leftOptions}>
            <Typography
              variant='h6'
              className={`${classes.title} ${classes.menuButton}`}
            >
              {userAttributes.name}
            </Typography>
            <Button
              className={classes.button}
              size='large'
              variant='outlined'
              color='secondary'
              onClick={onLoginLogoutClick}
            >
              Logout
            </Button>
          </div>
        )}
      </div>
    </AppBar>
  )
}

export default withRouter(AppNavBar)
