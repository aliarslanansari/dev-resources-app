import { Card, Theme, Typography } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/styles'
import { useFormik } from 'formik'
import { Dispatch } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
// import { userSignIn } from '../../services/authServices'
import { useInjectSaga } from 'redux-injectors'
import { createStructuredSelector } from 'reselect'
import DRButton from '../../components/DRButton'
import PageWrapper from '../../components/PageWrapper'
import TextField from '../../components/TextField'
import { CreatePostInput } from '../../graphql/API'
import { validationSchema } from './formikValidation'
import { createPostContainerCreators } from './reducer'
import saga from './saga'
import { selectLoading } from './selectors'

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
const CreatePostContainer = (props: PropsFromRedux) => {
  useInjectSaga({ key: 'loginPageContainer', saga })
  const classes = useStyles()
  const { loading, dispatchRequestCreatePost } = props

  const formik = useFormik({
    initialValues: {
      title: '',
      url: '',
      description: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatchRequestCreatePost(values)
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
          Create Dev Resource
        </Typography>
        <Card className={classes.cardRoot}>
          <form onSubmit={formik.handleSubmit}>
            <FormControl className={classes.formControl}>
              <TextField
                id='title'
                name='title'
                label='Title'
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                id='description'
                multiline
                rows={6}
                name='description'
                label='Description'
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                id='url'
                name='url'
                label='Resource URL'
                value={formik.values.url}
                onChange={formik.handleChange}
                error={formik.touched.url && Boolean(formik.errors.url)}
                helperText={formik.touched.url && formik.errors.url}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <DRButton loading={loading} type='submit' label={'Post'} />
            </FormControl>
          </form>
        </Card>
      </div>
    </PageWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  loading: selectLoading()
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    dispatchRequestCreatePost: (payload: CreatePostInput) => {
      return dispatch(createPostContainerCreators.requestCreatePost(payload))
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof withConnect>

export default compose(withConnect, withRouter)(CreatePostContainer)
