// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';

import Flex from '../../../components/Flex';
import Span from '../../../components/Span';
import logoWhite from '../../../assets/images/logos/logo_white.svg';

const Logo = ({ t }) => (
  <Flex justifyCenter alignCenter>
    <img alt={`${process.env.REACT_APP_NAME} logo`} src={logoWhite} style={{ height: '60px' }} />
    <Span
      ml=".25em"
      style={{
        fontFamily: 'Comfortaa',
        fontWeight: 700,
        fontSize: '2.8em',
      }}
    >
      {t('app')}
    </Span>
  </Flex>
);

export default withNamespaces('common')(Logo);
