/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  description: string,
  imageName?: string | null,
  url: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageName?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Post = {
  __typename: "Post",
  id?: string,
  title?: string,
  description?: string,
  imageName?: string | null,
  url?: string,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
  comments?: ModelCommentConnection,
  upVotes?: ModelUpVotesConnection,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id?: string,
  postID?: string,
  content?: string,
  createdAt?: string,
  updatedAt?: string,
  post?: Post,
  owner?: string | null,
};

export type ModelUpVotesConnection = {
  __typename: "ModelUpVotesConnection",
  items?:  Array<UpVotes | null > | null,
  nextToken?: string | null,
};

export type UpVotes = {
  __typename: "UpVotes",
  id?: string,
  postID?: string,
  createdAt?: string,
  updatedAt?: string,
  post?: Post,
  owner?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  imageName?: string | null,
  url?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateUpVotesInput = {
  id?: string | null,
  postID: string,
};

export type ModelUpVotesConditionInput = {
  postID?: ModelIDInput | null,
  and?: Array< ModelUpVotesConditionInput | null > | null,
  or?: Array< ModelUpVotesConditionInput | null > | null,
  not?: ModelUpVotesConditionInput | null,
};

export type UpdateUpVotesInput = {
  id: string,
  postID?: string | null,
};

export type DeleteUpVotesInput = {
  id?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageName?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelUpVotesFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelUpVotesFilterInput | null > | null,
  or?: Array< ModelUpVotesFilterInput | null > | null,
  not?: ModelUpVotesFilterInput | null,
};

export type CreatePostMutationVariables = {
  input?: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    imageName?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    upVotes?:  {
      __typename: "ModelUpVotesConnection",
      items?:  Array< {
        __typename: "UpVotes",
        id: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input?: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    imageName?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    upVotes?:  {
      __typename: "ModelUpVotesConnection",
      items?:  Array< {
        __typename: "UpVotes",
        id: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input?: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    imageName?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    upVotes?:  {
      __typename: "ModelUpVotesConnection",
      items?:  Array< {
        __typename: "UpVotes",
        id: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateUpVotesMutationVariables = {
  input?: CreateUpVotesInput,
  condition?: ModelUpVotesConditionInput | null,
};

export type CreateUpVotesMutation = {
  createUpVotes?:  {
    __typename: "UpVotes",
    id: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateUpVotesMutationVariables = {
  input?: UpdateUpVotesInput,
  condition?: ModelUpVotesConditionInput | null,
};

export type UpdateUpVotesMutation = {
  updateUpVotes?:  {
    __typename: "UpVotes",
    id: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteUpVotesMutationVariables = {
  input?: DeleteUpVotesInput,
  condition?: ModelUpVotesConditionInput | null,
};

export type DeleteUpVotesMutation = {
  deleteUpVotes?:  {
    __typename: "UpVotes",
    id: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    imageName?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    upVotes?:  {
      __typename: "ModelUpVotesConnection",
      items?:  Array< {
        __typename: "UpVotes",
        id: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        imageName?: string | null,
        url: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUpVotesQueryVariables = {
  id?: string,
};

export type GetUpVotesQuery = {
  getUpVotes?:  {
    __typename: "UpVotes",
    id: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListUpVotessQueryVariables = {
  filter?: ModelUpVotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUpVotessQuery = {
  listUpVotess?:  {
    __typename: "ModelUpVotesConnection",
    items?:  Array< {
      __typename: "UpVotes",
      id: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        imageName?: string | null,
        url: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    imageName?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    upVotes?:  {
      __typename: "ModelUpVotesConnection",
      items?:  Array< {
        __typename: "UpVotes",
        id: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    imageName?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    upVotes?:  {
      __typename: "ModelUpVotesConnection",
      items?:  Array< {
        __typename: "UpVotes",
        id: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    imageName?: string | null,
    url: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    upVotes?:  {
      __typename: "ModelUpVotesConnection",
      items?:  Array< {
        __typename: "UpVotes",
        id: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUpVotesSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUpVotesSubscription = {
  onCreateUpVotes?:  {
    __typename: "UpVotes",
    id: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUpVotesSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUpVotesSubscription = {
  onUpdateUpVotes?:  {
    __typename: "UpVotes",
    id: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUpVotesSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUpVotesSubscription = {
  onDeleteUpVotes?:  {
    __typename: "UpVotes",
    id: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      imageName?: string | null,
      url: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      upVotes?:  {
        __typename: "ModelUpVotesConnection",
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};
