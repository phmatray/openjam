// @flow

import React from 'react';
import { Comment } from 'semantic-ui-react';

import CommentItem from 'views/components/CommentItem';
import type { CommentBasic } from 'lib/types';

type Props = {
  comments: CommentBasic[],
  postId: string,
};

const CommentFeed = ({ comments, postId }: Props) => (
  <Comment.Group>
    {comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} postId={postId} />
    ))}
  </Comment.Group>
);

export default CommentFeed;
