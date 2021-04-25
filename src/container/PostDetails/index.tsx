import {
  Box,
  CircularProgress,
  Button,
  Typography,
  Divider
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { useInjectSaga } from 'redux-injectors'
import PageWrapper from '../../components/PageWrapper'
import { routeConfig } from '../../routeConfig'
import { HomeContainerCreators } from '../HomeContainer/reducer'
import homeContainerSaga from '../HomeContainer/saga'
import saga from './saga'
import { selectLoading, selectPostById } from '../HomeContainer/selectors'
import { selectIsLoggedIn } from '../LoginPageContainer/selectors'
import TextField from '../../components/TextField'
import DRButton from '../../components/DRButton'
import { selectLoadingForComment, selectCommentRes } from './selector'
import { postDetailsCreators } from './reducer'
import dayjs from 'dayjs'

const PostDetails = () => {
  useInjectSaga({ key: 'homeContainer', saga: homeContainerSaga })
  useInjectSaga({ key: 'postDetails', saga })
  const { postId } = useParams<{ postId: string }>()
  const dispatch = useDispatch()
  const history = useHistory()
  const post = useSelector(selectPostById(postId))
  const isLoggedIn = useSelector(selectIsLoggedIn())
  const loadingForComment = useSelector(selectLoadingForComment())
  const commentResponse = useSelector(selectCommentRes())
  const loading = useSelector(selectLoading())
  const [showCommentTextField, setShowCommentTextField] = useState(false)
  const [commentText, setCommentText] = useState('')
  useEffect(() => {
    dispatch(HomeContainerCreators.requestFetchPost({ postId }))
  }, [commentResponse])

  const onCommentAdd = () => {
    dispatch(
      postDetailsCreators.requestCreateComment({ postId, content: commentText })
    )
  }

  useEffect(() => {
    if (commentResponse) {
      setShowCommentTextField(false)
      setCommentText('')
    }
  }, [commentResponse])

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
          <Divider
            style={{ backgroundColor: '#64FFDA', margin: '20px 0' }}
          ></Divider>
          {!showCommentTextField ? (
            <>
              <Button
                color='secondary'
                variant='text'
                onClick={() => {
                  if (!isLoggedIn) {
                    history.push(
                      `${routeConfig.login.path}?redirectURL=${window.location.pathname}`
                    )
                  } else {
                    setShowCommentTextField(true)
                  }
                }}
              >
                Add Comment
              </Button>
            </>
          ) : (
            <TextField
              fullWidth
              id='comment'
              name='comment'
              type='text'
              label='Comment'
              variant='outlined'
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onCommentAdd()}
              color='secondary'
              InputProps={{
                endAdornment: (
                  <DRButton
                    loading={loadingForComment}
                    label='POST'
                    onClick={onCommentAdd}
                  />
                )
              }}
            />
          )}
          <div style={{ margin: 16 }}>
            {post?.comments?.items?.map((item) => {
              return (
                <>
                  <Typography
                    color='secondary'
                    variant='body1'
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    {item.content}
                    <span>
                      {dayjs(item.createdAt).format('hh:mm a -  DD/MM/YYYY ')}
                    </span>
                  </Typography>
                  <Divider />
                </>
              )
            })}
          </div>
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
