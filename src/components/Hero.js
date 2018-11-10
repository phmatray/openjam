import React from 'react';
import PropTypes from 'prop-types';

import HeroContainer from './hero/HeroContainer';
import { Overlay, ContainerFullHeight } from './hero/Atoms';

const Hero = ({ src, children }) => (
  <HeroContainer fluid src={src}>
    <Overlay>
      <ContainerFullHeight>{children}</ContainerFullHeight>
    </Overlay>
  </HeroContainer>
);

Hero.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Hero;
