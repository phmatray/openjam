import React from 'react';
import PropTypes from 'prop-types';
import { Image, Card } from 'semantic-ui-react';

const TrackInfo = ({ track }) => (
  // <div>
  //   <Image floated="left" size="tiny" bordered src={track.coverurl} />
  // </div>

  <Card fluid inverted>
    <Card.Content>
      <Card.Header>{track.title}</Card.Header>
      <Card.Meta>
        <i>by</i>
        &nbsp;&nbsp;
        {track.artist}
      </Card.Meta>
    </Card.Content>
  </Card>
);

TrackInfo.propTypes = {
  track: PropTypes.shape({
    coverurl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
};

export default TrackInfo;
