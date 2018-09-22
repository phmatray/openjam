import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

const TrackItem = ({ track, color }) => {
  const artistNames = track.artists.join(' & ');

  return (
    <Card color={color}>
      <Card.Content>
        <Card.Header>
          <img src={track.coverurl.w200} width="50" height="50" />
          <Link to={`/track/${track._id}`}>{track.title}</Link>
          <br />
          {track.edit && (
            <i
              style={{ color: '#666', fontFamily: 'Ubuntu', fontWeight: '300', fontSize: '0.8em' }}
            >{`(${track.edit})`}</i>
          )}
        </Card.Header>
        <Card.Meta>{artistNames}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

TrackItem.propTypes = {
  track: PropTypes.shape({
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    coverurl: PropTypes.shape({
      w200: PropTypes.string.isRequired,
    }).isRequired,
    edit: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
};

TrackItem.defaultProps = {
  color: 'teal',
};

export default TrackItem;
