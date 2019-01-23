// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';

import Body from 'views/components/Body';
import { Flex } from 'views/elements';

import KawaiiAnimation from './children/KawaiiAnimation';

const NotFound = ({ t }) => (
  <Body
    breadcrumbSegments={[t('pages.not-found.header')]}
    description={t('pages.not-found.subheader')}
  >
    <Flex fluid center mt="3em">
      <KawaiiAnimation />
    </Flex>
  </Body>
);

export default withNamespaces('common')(NotFound);
