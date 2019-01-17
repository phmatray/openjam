// @flow

import React from 'react';
import FeedStyled from './feed-presenter/FeedStyled';
import PostItem from '../PostItem';

type Props = {
  posts: [],
};

const FeedPresenter = ({ posts }: Props) => (
  <FeedStyled>
    {posts.map(item => (
      <PostItem key={item._id} post={item} />
    ))}
  </FeedStyled>
);

export default FeedPresenter;
