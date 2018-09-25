import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Body from '../../elements/UI/Body';

const PlaylistPresenter = ({ playlist }) => (
  <Body breadcrumbSegments={[<Link to="/playlists">Playlists</Link>, playlist.name]} />
);

PlaylistPresenter.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaylistPresenter;
