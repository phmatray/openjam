import React from 'react';
import PropTypes from 'prop-types';
import PostBasic from './children/PostBasic';
import PostAudio from './children/PostAudio';
import PostError from './children/PostError';

const PostItem = ({ post }) => {
  switch (post.type) {
    case 'post-basic':
      return <PostBasic post={post} />;

    case 'post-audio':
      return <PostAudio post={post} />;

    default:
      return <PostError />;
  }
};

PostItem.propTypes = {
  post: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
