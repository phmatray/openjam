import React from 'react';
import { withNamespaces } from 'react-i18next';

import GhostCharacter from './not-found/GhostCharacter';
import Body from '../components/Body';
import Div from '../components/Div';

const NotFound = ({ t }) => (
  <Body
    breadcrumbSegments={[t('pages.not-found.header')]}
    description={t('pages.not-found.subheader')}
  >
    <Div mt="3em">
      <GhostCharacter />
    </Div>
  </Body>
);

export default withNamespaces('common')(NotFound);
