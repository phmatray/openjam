import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import Moment from 'react-moment';
import Spinner from '../common/Spinner';
import Body from '../../elements/UI/Body';
import H2 from '../../elements/Titles/H2';
import TableTracks from './children/TableTracks';

const AlbumPresenter = ({ album, loading }) =>
  album === null || loading || Object.keys(album).length === 0 ? (
    <Spinner />
  ) : (
    <Body header={['Albums', album.name]}>
      <p>
        EP release date : <Moment format="LL">{album.release_date}</Moment>
      </p>
      <Image src={album.images[1].href} alt={album.name} />

      <H2 header="Tracks" />
      <TableTracks tracks={album.tracks} />
    </Body>
  );

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
  loading: PropTypes.bool.isRequired,
};

export default AlbumPresenter;
