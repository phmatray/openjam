// @flow

import React from 'react';

import PostItem from '../PostItem';
import type { PostBasic } from '../../types';

import FeedStyled from './feed-presenter/FeedStyled';

type Props = {
  posts: PostBasic[],
};

const FeedPresenter = ({ posts }: Props) => (
  <FeedStyled>
    {posts.map(item => (
      <PostItem key={item._id} post={item} />
    ))}
  </FeedStyled>
);

export default FeedPresenter;
