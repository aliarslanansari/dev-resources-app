/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateUpVotes = /* GraphQL */ `
  subscription OnCreateUpVotes($owner: String) {
    onCreateUpVotes(owner: $owner) {
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
export const onUpdateUpVotes = /* GraphQL */ `
  subscription OnUpdateUpVotes($owner: String) {
    onUpdateUpVotes(owner: $owner) {
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
export const onDeleteUpVotes = /* GraphQL */ `
  subscription OnDeleteUpVotes($owner: String) {
    onDeleteUpVotes(owner: $owner) {
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
