import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Body from '../../elements/UI/Body';

const ArtistPresenter = ({ artist }) => (
  <Body breadcrumbSegments={[<Link to="/artists">Artists</Link>, artist.name]} />
);

ArtistPresenter.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtistPresenter;
