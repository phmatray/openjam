// @flow

import type { ComponentType } from 'react';
import styled from 'styled-components';

type Props = {};

const Cover: ComponentType<Props> = styled.img`
  margin-right: 1em;
  border-radius: 6px;
  width: 150px;
  height: 150px;
  min-width: 150px;
  transition: all 0.3s ease;
  transition-property: width, height, min-width;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);

  @media only screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
    min-width: 80px;
  }
`;

export default Cover;
