// @flow

import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

const SegmentPost = styled(Segment)`
  width: '100%';
  margin: 'auto';
  display: 'flex';
`;

export const SegmentPostBasic = styled(SegmentPost).attrs({
  color: 'blue',
})``;

export const SegmentPostAudio = styled(SegmentPost).attrs({
  color: 'orange',
})``;

export const SegmentPostError = styled(SegmentPost).attrs({
  inverted: true,
  color: 'red',
  secondary: true,
  textAlign: 'center',
  padded: 'very',
})``;
