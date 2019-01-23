// @flow

import type { ComponentType } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  src: string,
};

const HeroContainer: ComponentType<Props> = styled.div`
  height: 256px;

  ${props =>
    props.src !== null
      ? css`
          background: url(${props => props.src}) no-repeat center center fixed;
          background-size: cover;
        `
      : css`
          background-color: black;
        `};
`;

export default HeroContainer;
