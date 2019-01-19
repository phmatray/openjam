// @flow

import React from 'react';

import type { PostBasic } from '../types';

import FeedPresenter from './feed/FeedPresenter';

type Props = {
  posts: PostBasic[],
};

const Feed = ({ posts }: Props) => <FeedPresenter posts={posts} />;

export default Feed;
