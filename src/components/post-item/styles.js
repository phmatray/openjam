// @flow

import styled from 'styled-components';
import {
  TextArea as TextAreaSemantic,
  Button as ButtonSemantic,
  Form,
  SegmentGroup,
} from 'semantic-ui-react';
import Moment from 'react-moment';

export const Content = styled.div`
  margin-left: 48px;
  margin-top: 1em;
  transition: margin-left 0.3s ease;

  @media only screen and (max-width: 767px) {
    margin-left: 0;
  }
`;

export const AvatarSmall = styled.img`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 8px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const TextArea = styled(TextAreaSemantic).attrs({ autoHeight: true })`
  padding-right: '3.5em';
`;

export const Button = styled(ButtonSemantic)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover,
  &:focus,
  ${TextArea}:hover + &,
  ${TextArea}:focus + & {
    opacity: 1;
  }
`;

export const AddCommentForm = styled(Form)`
  margin-left: 0.5em;
  width: 100%;
`;

export const CommentContainer = styled.div`
  background-color: #eff1f3;
  border-radius: 8px;
  padding: 10px;
  margin-left: 0.5em;
`;

export const CommentText = styled.p`
  margin-top: 4px;
`;

export const FromNow = styled(Moment).attrs({ fromNow: true })`
  font-size: 0.9rem;
  color: #666;
`;

export const PostAudioSegmentGroup = styled(SegmentGroup)`
  height: 150px;
  max-height: 150px;
  margin: 0 !important;
`;
