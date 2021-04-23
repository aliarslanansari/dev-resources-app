import { Card, InputAdornment, Theme, Typography } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LockIcon from '@material-ui/icons/Lock'
import { makeStyles } from '@material-ui/styles'
import { Dispatch, useEffect } from 'react'
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
import saga from './saga'
import { selectEmailVerificationCodeSent, selectLoading } from './selectors'
import {
  validationSchema,
  verificationCodeValidationSchema
} from './formikValidation'
import { useFormik } from 'formik'
import { registerUserContainerCreators } from './reducer'
import { selectIsLoggedIn } from '../LoginPageContainer/selectors'

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
const RegisterUserContainer = (props: PropsFromRedux) => {
  useInjectSaga({ key: 'loginPageContainer', saga })
  const classes = useStyles()
  const history = useHistory()
  const {
    emailVerificationCodeSent,
    loading,
    isLoggedIn,
    dispatchRequestUserSignUp,
    dispatchRequestEmailVerification
  } = props

  useEffect(() => {
    if (isLoggedIn) {
      history.push(routeConfig.homePage?.path || '/')
    }
  }, [isLoggedIn])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      name: '',
      verificationCode: ''
    },
    validationSchema: emailVerificationCodeSent
      ? validationSchema.concat(verificationCodeValidationSchema)
      : validationSchema,
    onSubmit: (values) => {
      const { username, password } = values
      if (!emailVerificationCodeSent) {
        dispatchRequestUserSignUp(values)
      } else {
        dispatchRequestEmailVerification({
          code: values.verificationCode,
          username,
          password
        })
      }
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
          Register here
        </Typography>
        <Card className={classes.cardRoot}>
          <form onSubmit={formik.handleSubmit}>
            <FormControl className={classes.formControl}>
              <TextField
                disabled={emailVerificationCodeSent}
                id='name'
                name='name'
                label='Name'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
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
                disabled={emailVerificationCodeSent}
                id='username'
                name='username'
                label='Email'
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
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
                disabled={emailVerificationCodeSent}
                id='password'
                name='password'
                label='Password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
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
              <TextField
                disabled={emailVerificationCodeSent}
                id='confirmPassword'
                name='confirmPassword'
                label='Password'
                type='password'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
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
            {emailVerificationCodeSent && (
              <FormControl className={classes.formControl}>
                <TextField
                  id='verificationCode'
                  name='verificationCode'
                  label='Verification Code'
                  type='text'
                  value={formik.values.verificationCode}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.verificationCode &&
                    Boolean(formik.errors.verificationCode)
                  }
                  helperText={
                    formik.touched.verificationCode &&
                    formik.errors.verificationCode
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
            )}
            <FormControl className={classes.formControl}>
              <DRButton
                loading={loading}
                type='submit'
                label={emailVerificationCodeSent ? 'Verify' : 'Register'}
              />
            </FormControl>
          </form>
        </Card>
      </div>
    </PageWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading(),
  emailVerificationCodeSent: selectEmailVerificationCodeSent(),
  isLoggedIn: selectIsLoggedIn()
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    dispatchRequestUserSignUp: (payload: IUserSignup) => {
      return dispatch(registerUserContainerCreators.requestUserSignUp(payload))
    },
    dispatchRequestEmailVerification: (payload: IUserSignupConfirmation) => {
      return dispatch(
        registerUserContainerCreators.requestEmailVerification(payload)
      )
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof withConnect>

export default compose(withConnect, withRouter)(RegisterUserContainer)
