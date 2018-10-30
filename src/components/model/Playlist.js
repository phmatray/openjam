import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Title from './playlist/Title';
import Description from './playlist/Description';
import PlaylistCover from '../PlaylistCover';

const Playlist = ({ playlist, color }) => {
  return (
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
};

Playlist.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string,
};

Playlist.defaultProps = {
  color: 'teal',
};

export default Playlist;
