// @flow

import React from 'react';
import FeedPresenter from './feed/FeedPresenter';

type Props = {
  posts: [],
};

const Feed = ({ posts }: Props) => <FeedPresenter posts={posts} />;

export default Feed;
