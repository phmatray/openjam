import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const AlbumItem = ({ album, color }) => {
  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>
          <Link to={`/album/${album._id}`}>{album.name}</Link>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string,
};

AlbumItem.defaultProps = {
  color: 'teal',
};

export default AlbumItem;
