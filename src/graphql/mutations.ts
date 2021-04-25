/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      description
      imageName
      url
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
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      description
      imageName
      url
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
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      description
      imageName
      url
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
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        description
        imageName
        url
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
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        description
        imageName
        url
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
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        description
        imageName
        url
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
`;
export const createUpVotes = /* GraphQL */ `
  mutation CreateUpVotes(
    $input: CreateUpVotesInput!
    $condition: ModelUpVotesConditionInput
  ) {
    createUpVotes(input: $input, condition: $condition) {
      id
      postID
      createdAt
      updatedAt
      post {
        id
        title
        description
        imageName
        url
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
`;
export const updateUpVotes = /* GraphQL */ `
  mutation UpdateUpVotes(
    $input: UpdateUpVotesInput!
    $condition: ModelUpVotesConditionInput
  ) {
    updateUpVotes(input: $input, condition: $condition) {
      id
      postID
      createdAt
      updatedAt
      post {
        id
        title
        description
        imageName
        url
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
`;
export const deleteUpVotes = /* GraphQL */ `
  mutation DeleteUpVotes(
    $input: DeleteUpVotesInput!
    $condition: ModelUpVotesConditionInput
  ) {
    deleteUpVotes(input: $input, condition: $condition) {
      id
      postID
      createdAt
      updatedAt
      post {
        id
        title
        description
        imageName
        url
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
`;
