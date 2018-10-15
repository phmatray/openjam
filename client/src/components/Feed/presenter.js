import React from 'react';
import PropTypes from 'prop-types';
import { Feed } from './styles';
import PostItem from '../PostItem/PostItem';

const FeedPresenter = ({ posts, user }) => (
  <Feed>
    {posts.map((item, idx) => (
      <PostItem key={idx} post={item} user={user} />
    ))}
  </Feed>
);

FeedPresenter.propTypes = {
  posts: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default FeedPresenter;
