import {
  Button,
  Card,
  InputAdornment,
  Theme,
  Typography
} from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import { makeStyles } from '@material-ui/styles'
import { Dispatch, useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { compose } from 'redux'
// import { userSignIn } from '../../services/authServices'
import { useInjectSaga } from 'redux-injectors'
import { createStructuredSelector } from 'reselect'
import DRButton from '../../components/DRButton'
import PageWrapper from '../../components/PageWrapper'
import TextField from '../../components/TextField'
import { routeConfig } from '../../routeConfig'
import { useHistory, withRouter } from 'react-router-dom'
import { loginPageContainerCreators } from './reducer'
import saga from './saga'
import { selectIsLoggedIn, selectLoading } from './selectors'
import { validationSchema } from './formikValidation'
import { useFormik } from 'formik'

const useStyles = makeStyles((theme: Theme) => ({
  titleText: {
    margin: '1rem',
    alignSelf: 'center'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: '90vh',
    padding: '0 15%'
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
  const history = useHistory()
  const { isLoggedIn, dispatchRequestLogin, loading } = props

  useEffect(() => {
    if (isLoggedIn) {
      history.push(routeConfig.homePage?.path || '/')
    }
  }, [isLoggedIn])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatchRequestLogin(values)
    }
  })
  return (
    <PageWrapper>
      <div className={classes.root}>
        <Typography
          color='secondary'
          variant='h5'
          className={classes.titleText}
        >
          Login from here
        </Typography>
        <Card className={classes.cardRoot}>
          <FormControl className={classes.formControl}>
            <TextField
              id='username'
              name='username'
              label='Email'
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
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
              fullWidth
              id='password'
              name='password'
              label='Password'
              type='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
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
            <DRButton
              loading={loading}
              type='submit'
              label='Login'
              onClick={formik.handleSubmit}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button color='secondary' variant='outlined'>
              Register
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
