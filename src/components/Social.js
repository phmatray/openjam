// @flow

import React from 'react';
import Icon from './Icon';
import { extractWithoutExtension } from '../lib/utils/domainHelpers';

type Props = {
  href: string,
};

const Social = ({ href }: Props) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ margin: '5px' }}>
    <Icon name={extractWithoutExtension(href)} />
  </a>
);

export default Social;
