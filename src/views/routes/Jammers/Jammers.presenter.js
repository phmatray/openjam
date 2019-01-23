// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Card } from 'semantic-ui-react';

import Body from 'views/components/Body';
import Message from 'views/components/Message';

import Jammer from './children/Jammer';

type Props = {
  jammers: { _id: string }[],
  isAuthenticated: boolean,
  t: any,
};

const JammersPresenter = ({ jammers, isAuthenticated, t }: Props) => (
  <Body breadcrumbSegments={[t('pages.jammers.header')]} description={t('pages.jammers.subheader')}>
    {!isAuthenticated && <Message />}

    {jammers !== null && (
      <Card.Group itemsPerRow={6} stackable>
        {jammers.map(jammer => (
          <Jammer key={jammer._id} jammer={jammer} />
        ))}
      </Card.Group>
    )}
  </Body>
);

export default withNamespaces('common')(JammersPresenter);
