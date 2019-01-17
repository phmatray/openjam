// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';

type Props = {
  color?: string,
  fontSize?: string,

  mt?: string,
  mr?: string,
  mb?: string,
  ml?: string,

  pt?: string,
  pr?: string,
  pb?: string,
  pl?: string,
};

const Span: ComponentType<Props> = styled.span`
  color: ${props => props.color || 'inherit'};
  font-size: ${props => props.fontSize || '1rem'};

  margin-top: ${props => props.mt || 'initial'} !important;
  margin-right: ${props => props.mr || 'initial'} !important;
  margin-bottom: ${props => props.mb || 'initial'} !important;
  margin-left: ${props => props.ml || 'initial'} !important;

  padding-top: ${props => props.pt || 'initial'} !important;
  padding-right: ${props => props.pr || 'initial'} !important;
  padding-bottom: ${props => props.pb || 'initial'} !important;
  padding-left: ${props => props.pl || 'initial'} !important;
`;

export default Span;
