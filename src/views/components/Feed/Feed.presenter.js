// @flow

import React from 'react';

import type { PostBasic } from 'lib/types';

import PostList from './children/PostList';
import FeedStyled from './styled/FeedStyled';

type Props = {
  posts: PostBasic[],
};

const FeedPresenter = ({ posts }: Props) => (
  <FeedStyled>
    <PostList posts={posts} />
  </FeedStyled>
);

export default FeedPresenter;
