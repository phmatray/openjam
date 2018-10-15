import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import { Feed } from 'semantic-ui-react';

class PostFeed extends Component {
  render() {
    const { posts, user } = this.props;

    return (
      <Feed>
        {posts.map(post => (
          <PostItem key={post._id} post={post} user={user} />
        ))}
      </Feed>
    );
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default PostFeed;
