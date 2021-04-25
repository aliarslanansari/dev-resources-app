import { CircularProgress, Grid } from '@material-ui/core'
import PageWrapper from '../../components/PageWrapper'
import { compose } from 'redux'
import { useHistory, withRouter } from 'react-router-dom'
import ResourceCard from '../../components/ResourceCard'
import saga from './saga'
import { useInjectSaga } from 'redux-injectors'
import { createStructuredSelector } from 'reselect'
import { selectAllPosts, selectLoading } from './selectors'
import { Dispatch, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { HomeContainerCreators } from './reducer'
import DRButton from '../../components/DRButton'
import { routeConfig } from '../../routeConfig'

const HomeContainer = ({
  dispatchRequestFetchPosts,
  allPosts,
  loading
}: PropsFromRedux) => {
  useInjectSaga({ key: 'homeContainer', saga })
  const history = useHistory()

  useEffect(() => {
    dispatchRequestFetchPosts()
  }, [])

  useEffect(() => {
    console.log({ allPosts })
  }, [allPosts])

  return (
    <PageWrapper>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between'
        }}
      >
        <DRButton
          label='Create Post'
          style={{ margin: 16 }}
          onClick={() => {
            history.push(routeConfig.createPost.path)
          }}
        />
        {loading && (
          <CircularProgress
            style={{ margin: 16 }}
            size={'2rem'}
            color='secondary'
          />
        )}
      </div>
      <Grid container>
        {allPosts?.map((post) => (
          <Grid item sm={12} xs={12} md={6} lg={4} key={post?.id}>
            <ResourceCard
              title={post?.title || ''}
              description={post?.description || ''}
            />
          </Grid>
        ))}
        {[1, 2, 3, 4, 5].map((post) => (
          <Grid item sm={12} xs={12} md={6} lg={4} key={post}>
            <ResourceCard title={''} description={''} skeleton />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  allPosts: selectAllPosts(),
  loading: selectLoading()
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    dispatchRequestFetchPosts: () => {
      return dispatch(HomeContainerCreators.requestFetchPosts())
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof withConnect>

export default compose(withConnect, withRouter)(HomeContainer)
