import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import CommentItem from './CommentItem';

const CommentFeed = ({ comments, postId }) => (
  <Comment.Group>
    {comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} postId={postId} />
    ))}
  </Comment.Group>
);

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentFeed;
