import { Button, Card, InputAdornment, Theme } from '@material-ui/core'
import DRButton from '../../components/DRButton'
import { makeStyles } from '@material-ui/styles'
import { Dispatch, useEffect, useState } from 'react'
import PageWrapper from '../../components/PageWrapper'
import TextField from '../../components/TextField'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import { withRouter } from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
// import { userSignIn } from '../../services/authServices'
import { useInjectSaga } from 'redux-injectors'
import saga from './saga'
import { createStructuredSelector } from 'reselect'
import { selectIsLoggedIn, selectLoading } from './selectors'
import { connect, ConnectedProps } from 'react-redux'
import { compose } from 'redux'
import { loginPageContainerCreators } from './reducer'
import { routeConfig } from '../../routeConfig'
import get from 'lodash/get'
import history from '../../utils/history'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100vh',
    height: '90vh'
  },
  textField: {
    width: '100%',
    marginTop: 15,
    color: 'white'
  },
  textFieldFocused: {
    '& $notchedOutline': {
      borderColor: theme.palette.secondary.main
    }
  },
  notchedOutline: {},
  formControl: {
    marginTop: 15,
    width: '100%'
  },
  cardRoot: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  }
}))
const LoginPageContainer = (props: PropsFromRedux) => {
  useInjectSaga({ key: 'loginPageContainer', saga })
  const classes = useStyles()

  const { isLoggedIn, dispatchRequestLogin, loading } = props

  const [cred, setCreds] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    if (isLoggedIn) {
      history.push(routeConfig.homePage?.path || '/')
    }
  }, [isLoggedIn])

  const handleLoginClick = async () => {
    dispatchRequestLogin(cred)
  }
  return (
    <PageWrapper>
      <div className={classes.root}>
        <Card className={classes.cardRoot}>
          <FormControl className={classes.formControl}>
            <TextField
              value={cred.username}
              label={'Username'}
              onChange={(e) => {
                setCreds((s) => ({ ...s, username: e.target.value }))
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle color='secondary' />
                  </InputAdornment>
                )
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              value={cred.password}
              label='Password'
              onChange={(e) =>
                setCreds((s) => ({ ...s, password: e.target.value }))
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockIcon color='secondary' />
                  </InputAdornment>
                )
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <DRButton onClick={handleLoginClick} loading={loading} label='Login'>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button color='secondary' variant='outlined'>
              Register | {JSON.stringify({ isLoggedIn })}
            </Button>
          </FormControl>
        </Card>
      </div>
    </PageWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectIsLoggedIn(),
  loading: selectLoading()
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    dispatchRequestLogin: (payload: IUserSignInTypes) => {
      return dispatch(loginPageContainerCreators.requestLogin(payload))
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof withConnect>

export default compose(withConnect, withRouter)(LoginPageContainer)
