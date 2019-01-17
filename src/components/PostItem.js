// @flow

import React from 'react';
import PostBasic from './post-item/PostBasic';
import PostAudio from './post-item/PostAudio';
import PostError from './post-item/PostError';

type Props = {
  post: { type: string },
};

const PostItem = ({ post }: Props) => {
  switch (post.type) {
    case 'post-basic':
      return <PostBasic post={post} />;
    case 'post-audio':
      return <PostAudio post={post} />;
    default:
      return <PostError />;
  }
};

export default PostItem;
