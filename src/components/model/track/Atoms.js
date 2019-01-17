// @flow

import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const Details = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artists = styled.p`
  color: #666;
  font-family: Ubuntu;
  font-weight: 300;
  font-size: 0.9em;
`;

export const Cover = styled(Image)`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  border: 1px solid #ccc;
  border-radius: 0.3em;
  margin: 0.2em 0 0.2em 0;
`;
