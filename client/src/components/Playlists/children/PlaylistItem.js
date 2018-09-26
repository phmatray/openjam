import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const PlaylistItem = ({ playlist, color }) => {
  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>
          <Link to={`/playlist/${playlist._id}`}>{playlist.name}</Link>
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

PlaylistItem.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string,
};

PlaylistItem.defaultProps = {
  color: 'teal',
};

export default PlaylistItem;
