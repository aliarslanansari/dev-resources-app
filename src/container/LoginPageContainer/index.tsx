import { Button, Card, InputAdornment, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Dispatch, useState } from 'react'
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
import { selectIsLoggedIn } from './selectors'
import { connect, ConnectedProps } from 'react-redux'
import { compose } from 'redux'
import { loginPageContainerCreators, loginPageContainerTypes } from './reducer'

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
  const { isLoggedIn, dispatchReset } = props
  useInjectSaga({ key: 'loginPageContainer', saga })
  const [cred, setCreds] = useState({
    username: '',
    password: ''
  })
  const classes = useStyles()
  const handleLoginClick = async () => {
    // const user = await userSignIn(cred)
    dispatchReset()
    // console.log(user)
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
            <Button
              variant='outlined'
              color='secondary'
              onClick={handleLoginClick}
            >
              Login
            </Button>
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
  isLoggedIn: selectIsLoggedIn()
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    dispatchReset: () => {
      alert(
        JSON.stringify(
          { loginPageContainerTypes, loginPageContainerCreators },
          null,
          2
        )
      )
      // return dispatch(loginPageContainerCreators.reset)
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof withConnect>

export default compose(withConnect, withRouter)(LoginPageContainer)
