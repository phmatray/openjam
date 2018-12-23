import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import LinkEntity from '../../../components/LinkEntity';

const About = ({ track }) => (
  <React.Fragment>
    <Header as="h2">Albums</Header>
    <ul>
      {track.albums.map(album => (
        <li key={album._id}>
          <LinkEntity entity={album} as="table" />
        </li>
      ))}
    </ul>
    {track.explicit && <p>This title contains explicit content.</p>}
  </React.Fragment>
);

About.propTypes = {
  track: PropTypes.shape({
    albums: PropTypes.arrayOf(PropTypes.object).isRequired,
    explicit: PropTypes.bool.isRequired,
  }).isRequired,
};

export default About;
