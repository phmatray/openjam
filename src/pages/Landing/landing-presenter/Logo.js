import React from 'react';
import Flex from '../../../components/Flex';
import Span from '../../../components/Span';
import logoWhite from '../../../images/logos/logo_white.svg';

function Logo() {
  return (
    <Flex justifyCenter alignCenter>
      <img alt="OpenJam logo" src={logoWhite} style={{ height: '60px' }} />
      <Span
        ml=".25em"
        style={{
          fontFamily: 'Comfortaa',
          fontWeight: 700,
          fontSize: '2.8em',
        }}
      >
        OpenJam
      </Span>
    </Flex>
  );
}

export default Logo;
