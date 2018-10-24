import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import { Comment } from 'semantic-ui-react';

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;

    return (
      <Comment.Group>
        {comments.map(comment => (
          <CommentItem key={comment._id} comment={comment} postId={postId} />
        ))}
      </Comment.Group>
    );
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentFeed;
