import React from 'react';
import { withNamespaces } from 'react-i18next';

import KawaiiAnimation from './not-found/KawaiiAnimation';
import Body from '../components/Body';
import Flex from '../components/Flex';

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
