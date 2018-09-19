import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const TrackItem = ({ track }) => {
  const artistNames = track.artists.join(' & ');

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {track.title}
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
  track: PropTypes.object.isRequired,
};

export default TrackItem;
