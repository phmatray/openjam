// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoWhite from 'assets/images/logos/logo_white.svg';
import { extractWithoutExtension } from 'lib/utils/domainHelpers';
import { getBrandColor, getBrandIconName } from 'lib/utils/brandHelpers';

import IconWrapper from './styled/IconWrapper';

type Props = {
  href: string,
};

const SocialIcon = ({ href }: Props) => {
  const domain = extractWithoutExtension(href);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ margin: '5px' }}>
      <IconWrapper color={getBrandColor(domain)}>
        {domain === 'openjam' ? (
          <img src={logoWhite} style={{ height: '24px' }} alt="" />
        ) : (
          <FontAwesomeIcon
            icon={getBrandIconName(domain)}
            style={{ margin: 0, height: 'initial', fontSize: '20px' }}
          />
        )}
      </IconWrapper>
    </a>
  );
};

export default SocialIcon;
