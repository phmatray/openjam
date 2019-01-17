// @flow

import React from 'react';

import { SegmentPostError } from '../SegmentPost';

type Props = {
  message?: string,
};

const PostError = ({ message }: Props) => <SegmentPostError>{message}</SegmentPostError>;

PostError.defaultProps = {
  message: 'This component has not yet been developed. Come back later.',
};

export default PostError;
