import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const ArtistItem = ({ artist, color }) => {
  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>
          <Link to={`/artist/${artist._id}`}>{artist.name}</Link>
        </Card.Header>
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
