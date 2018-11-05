import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import LinkEntity from '../../../../components/LinkEntity';

const About = ({ track }) => (
  <React.Fragment>
    <Header as="h2">About</Header>
    <p>
      {'From the album '}
      <br />
      <LinkEntity entity={track.album} as="table" />
    </p>
    {track.explicit && <p>This title contains explicit content.</p>}
  </React.Fragment>
);

About.propTypes = {
  track: PropTypes.shape({
    album: PropTypes.object.isRequired,
    explicit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default About;
