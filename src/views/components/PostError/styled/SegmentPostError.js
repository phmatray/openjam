// @flow

import styled from 'styled-components';

import SegmentPost from 'views/components/PostText/styled/SegmentPost';

const SegmentPostError = styled(SegmentPost).attrs({
  inverted: true,
  color: 'red',
  secondary: true,
  textAlign: 'center',
  padded: 'very',
})``;

export default SegmentPostError;
