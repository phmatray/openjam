import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Card } from 'semantic-ui-react';

import Jammer from './jammers-presenter/Jammer';
import Body from '../../components/Body';
import Message from '../../components/Message';

const JammersPresenter = ({ jammers, isAuthenticated, t }) => (
  <Body breadcrumbSegments={[t('pages.jammers.header')]} description={t('pages.jammers.subheader')}>
    {!isAuthenticated && <Message />}

    {jammers !== null && (
      <Card.Group itemsPerRow={4} stackable>
        {jammers.map(jammer => (
          <Jammer key={jammer._id} jammer={jammer} />
        ))}
      </Card.Group>
    )}
  </Body>
);

JammersPresenter.propTypes = {
  jammers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withNamespaces('common')(JammersPresenter);
