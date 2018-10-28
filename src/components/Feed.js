import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedPresenter from './feed/FeedPresenter';

export class Feed extends Component {
  render() {
    const { posts } = this.props;
    return <FeedPresenter posts={posts} />;
  }
}

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Feed;
