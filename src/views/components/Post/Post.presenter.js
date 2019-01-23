// @flow

import React from 'react';

import PostText from 'views/components/PostText';
import PostAudio from 'views/components/PostAudio';
import PostError from 'views/components/PostError';
import type { PostBasic } from 'lib/types';

type Props = {
  post: PostBasic,
};

const PostItem = ({ post }: Props) => {
  switch (post.type) {
    case 'post-basic':
      return <PostText post={post} />;
    case 'post-audio':
      return <PostAudio post={post} />;
    default:
      return <PostError />;
  }
};

export default PostItem;
