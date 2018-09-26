import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Body from '../../elements/UI/Body';
import H2 from '../../elements/Titles/H2';
import TableTracks from './children/TableTracks';

const PlaylistPresenter = ({ playlist }) => (
  <Body breadcrumbSegments={[<Link to="/playlists">Playlists</Link>, playlist.name]}>
    <H2 header="Tracks" />
    <TableTracks tracks={playlist.tracks} />
  </Body>
);

PlaylistPresenter.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaylistPresenter;
