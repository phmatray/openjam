import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const ArtistItem = ({ artist, color }) => {
  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>{artist.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

ArtistItem.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string,
};

ArtistItem.defaultProps = {
  color: 'teal',
};

export default ArtistItem;
