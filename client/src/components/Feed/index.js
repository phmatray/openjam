import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedPresenter from './presenter';

export class Feed extends Component {
  render() {
    const { posts, user } = this.props;
    return <FeedPresenter posts={posts} user={user} />;
  }
}

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default Feed;
