// @flow

import React from 'react';

import PostBasicContainer from '../containers/PostBasic';
import type { PostBasic } from '../types';

import PostAudio from './post-item/PostAudio';
import PostError from './post-item/PostError';

type Props = {
  post: PostBasic,
};

const PostItem = ({ post }: Props) => {
  switch (post.type) {
    case 'post-basic':
      return <PostBasicContainer post={post} />;
    case 'post-audio':
      return <PostAudio post={post} />;
    default:
      return <PostError />;
  }
};

export default PostItem;
