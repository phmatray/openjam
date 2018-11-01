import React from 'react';
import PropTypes from 'prop-types';
import FeedPresenter from './feed/FeedPresenter';

const Feed = ({ posts }) => <FeedPresenter posts={posts} />;

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Feed;
