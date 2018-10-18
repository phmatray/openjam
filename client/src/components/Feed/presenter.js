import React from 'react';
import PropTypes from 'prop-types';
import { Feed } from './styles';
import PostItem from '../PostItem/PostItem';

const FeedPresenter = ({ posts }) => (
  <Feed>
    {posts.map((item, idx) => (
      <PostItem key={idx} post={item} />
    ))}
  </Feed>
);

FeedPresenter.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default FeedPresenter;
