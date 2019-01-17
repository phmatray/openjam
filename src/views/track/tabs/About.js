// @flow

import React from 'react';
import { Header } from 'semantic-ui-react';

import LinkEntity from '../../../components/LinkEntity';

type Props = {
  track: {
    albums: { album: { _id: string } }[],
    explicit: boolean,
  },
};

const About = ({ track }: Props) => (
  <React.Fragment>
    <Header as="h2">Albums</Header>
    <ul>
      {track.albums.map(a => (
        <li key={a.album._id}>
          <LinkEntity entity={a.album} as="table" />
        </li>
      ))}
    </ul>
    {track.explicit && <p>This title contains explicit content.</p>}
  </React.Fragment>
);

export default About;
