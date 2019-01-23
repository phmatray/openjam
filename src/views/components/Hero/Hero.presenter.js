// @flow

import * as React from 'react';

import HeroContainer from './styled/HeroContainer';
import Overlay from './styled/Overlay';
import ContainerFullHeight from './styled/ContainerFullHeight';

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
