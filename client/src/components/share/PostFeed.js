import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import { Feed } from 'semantic-ui-react';

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return (
      <Feed>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </Feed>
    );
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostFeed;
