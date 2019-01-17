// @flow

import * as React from 'react';

import HeroContainer from './hero/HeroContainer';
import { Overlay, ContainerFullHeight } from './hero/Atoms';

type Props = {
  src: string,
  children: React.Node,
};

const Hero = ({ src, children }: Props) => (
  <HeroContainer fluid src={src}>
    <Overlay>
      <ContainerFullHeight>{children}</ContainerFullHeight>
    </Overlay>
  </HeroContainer>
);

export default Hero;
