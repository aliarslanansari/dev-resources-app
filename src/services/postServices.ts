import {
  CreateCommentMutationVariables,
  CreatePostMutationVariables,
  GetPostQueryVariables,
  ListPostsQueryVariables
} from '../graphql/API'
import { getPost, listPosts } from '../graphql/queries'
import {
  createPost as createPostMutation,
  createComment as createCommentMutation
} from '../graphql/mutations'
import { graphQlOperation, GRAPHQL_OPERATION_TYPES } from '../utils/apiUtils'

const { query, mutate } = GRAPHQL_OPERATION_TYPES

export const fetchPosts = (payload: ListPostsQueryVariables) =>
  graphQlOperation(query, listPosts, payload)

export const fetchPostById = (payload: GetPostQueryVariables) =>
  graphQlOperation(query, getPost, payload)

export const createPost = (payload: CreatePostMutationVariables) =>
  graphQlOperation(mutate, createPostMutation, payload)

export const createComment = (payload: CreateCommentMutationVariables) =>
  graphQlOperation(mutate, createCommentMutation, payload)
