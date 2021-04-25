import { Box, CircularProgress, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import PageWrapper from '../../components/PageWrapper'
import { selectPostById, selectLoading } from '../HomeContainer/selectors'
import homeContainerSaga from '../HomeContainer/saga'
import { useInjectSaga } from 'redux-injectors'
import { HomeContainerCreators } from '../HomeContainer/reducer'

const PostDetails = () => {
  useInjectSaga({ key: 'homeContainer', saga: homeContainerSaga })
  const { postId } = useParams<{ postId: string }>()
  const dispatch = useDispatch()
  const post = useSelector(selectPostById(postId))
  const loading = useSelector(selectLoading())
  useEffect(() => {
    dispatch(HomeContainerCreators.requestFetchPost({ postId }))
  }, [])

  return (
    <PageWrapper>
      {post && (
        <Box color='primary'>
          <Typography variant='h3' color='secondary'>
            {post?.title}
          </Typography>
          <Typography
            variant='body1'
            color='secondary'
            component='p'
            style={{ marginTop: 50 }}
          >
            {post?.description}
          </Typography>
        </Box>
      )}
      {loading && (
        <div
          style={{
            height: 100,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <CircularProgress size='2rem' color='secondary' />
        </div>
      )}
    </PageWrapper>
  )
}

export default PostDetails
