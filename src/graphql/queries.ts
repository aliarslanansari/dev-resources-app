/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
        upVotes {
          nextToken
        }
      }
      nextToken
    }
  }
`
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      description
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      upVotes {
        items {
          id
          postID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        description
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
        upVotes {
          nextToken
        }
      }
      owner
    }
  }
`
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
        post {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`
export const getUpVotes = /* GraphQL */ `
  query GetUpVotes($id: ID!) {
    getUpVotes(id: $id) {
      id
      postID
      createdAt
      updatedAt
      post {
        id
        title
        description
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
        upVotes {
          nextToken
        }
      }
      owner
    }
  }
`
export const listUpVotess = /* GraphQL */ `
  query ListUpVotess(
    $filter: ModelUpVotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpVotess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        createdAt
        updatedAt
        post {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`
