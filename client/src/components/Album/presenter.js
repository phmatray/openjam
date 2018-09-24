import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Moment from 'react-moment';
import Body from '../../elements/UI/Body';
import H2 from '../../elements/Titles/H2';
import TableTracks from './children/TableTracks';

const AlbumPresenter = ({ album }) => {
  const albumName = album.album_type === 'EP' ? `${album.name} - EP` : album.name;

  const description = (
    <span>
      Release date: <Moment format="LL">{album.release_date}</Moment>
    </span>
  );

  return (
    <Body
      breadcrumbSegments={[<Link to="/albums">Albums</Link>, albumName]}
      description={description}
    >
      <Image src={album.images[1].href} alt={album.name} />

      <H2 header="Tracks" />
      <TableTracks tracks={album.tracks} />
    </Body>
  );
};

AlbumPresenter.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    tracks: PropTypes.array.isRequired,
  }).isRequired,
};

export default AlbumPresenter;
