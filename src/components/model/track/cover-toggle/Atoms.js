// @flow

import styled from 'styled-components';
import { Icon as SemanticIcon, Image as SemanticImage } from 'semantic-ui-react';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 0 !important;
  margin: 0.2em 0;
  width: 50px;
  height: 50px;
  border-radius: 5%;
  overflow: hidden;
  margin: 0.2em 0 0.2em 0;
`;

export const Cover = styled(SemanticImage)`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 5%;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: #0006;
  opacity: 0;
  transition: 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Icon = styled(SemanticIcon)`
  width: 50px;
  height: 50px;
`;
