// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import PlaylistCover from '../PlaylistCover';

import Title from './playlist/Title';
import Description from './playlist/Description';

type Props = {
  playlist: {
    _id: string,
    name: string,
    description: string,
    tracks: [],
  },
};

const Playlist = ({ playlist }: Props) => (
  <div
    style={{
      width: 'calc(250px + 0.9em)',
      marginBottom: '1.5em',
      marginRight: '0.9em',
    }}
  >
    <Link to={`/playlist/${playlist._id}`}>
      <PlaylistCover tracks={playlist.tracks} />
    </Link>

    <Title>{playlist.name}</Title>
    <Description>{playlist.description}</Description>
  </div>
);

Playlist.propTypes = {};

export default Playlist;
