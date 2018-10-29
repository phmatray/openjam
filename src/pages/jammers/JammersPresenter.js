import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import Jammer from './jammers-presenter/Jammer';
import Body from '../../components/Body';
import Message from '../../components/Message';

const JammersPresenter = ({ jammers, isAuthenticated }) => (
  <Body
    breadcrumbSegments={['Jammers']}
    description="Browse and connect with listeners and musicians."
  >
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

export default JammersPresenter;
