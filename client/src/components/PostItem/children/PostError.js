import React from 'react';
import PropTypes from 'prop-types';
import { SegmentPostError } from '../../../elements/UI/SegmentPost';

const PostError = ({ message }) => <SegmentPostError>{message}</SegmentPostError>;

PostError.propTypes = {
  message: PropTypes.string,
};

PostError.defaultProps = {
  message: 'This component has not yet been developed. Come back later.',
};

export default PostError;
