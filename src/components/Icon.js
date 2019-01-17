// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoWhite from '../assets/images/logos/logo_white.svg';
import { getBrandColor, getBrandIconName } from '../lib/utils/brandHelpers';
import type { Domain } from '../lib/types/common';

import Span from './icon/Span';

type Props = {
  name: Domain,
};

const Icon = ({ name }: Props) => (
  <Span color={getBrandColor(name)}>
    {name === 'openjam' ? (
      <img src={logoWhite} style={{ height: '24px' }} alt="" />
    ) : (
      <FontAwesomeIcon
        icon={getBrandIconName(name)}
        style={{ margin: 0, height: 'initial', fontSize: '20px' }}
      />
    )}
  </Span>
);

export default Icon;
