import { Grid } from '@material-ui/core'
import PageWrapper from '../../components/PageWrapper'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import ResourceCard from '../../components/ResourceCard'
import saga from './saga'
import { useInjectSaga } from 'redux-injectors'
import { createStructuredSelector } from 'reselect'
import { selectAllPosts, selectLoading } from './selectors'
import { Dispatch, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { HomeContainerCreators } from './reducer'

const HomeContainer = ({
  dispatchRequestFetchPosts,
  allPosts,
  loading
}: PropsFromRedux) => {
  useInjectSaga({ key: 'homeContainer', saga })

  useEffect(() => {
    dispatchRequestFetchPosts()
  }, [])

  useEffect(() => {
    console.log({ allPosts })
  }, [allPosts])

  return (
    <PageWrapper>
      <Grid container>
        {allPosts?.map((post) => (
          <Grid item sm={12} xs={12} md={6} lg={4}>
            <ResourceCard
              title={post?.title || ''}
              description={post?.description || ''}
            />
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
