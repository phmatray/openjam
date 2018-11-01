import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

import AlbumTracks from './album-presenter/AlbumTracks';
import AlbumCover from '../../components/AlbumCover';
import Body from '../../components/Body';

const getAlbumName = album => {
  let albumName = '';
  if (album && album.name) {
    if (album.album_type === 'EP') {
      albumName = `${album.name} - EP`;
    } else {
      albumName = album.name;
    }
  }

  return albumName;
};

const getDescription = album => (
  <span>
    Release date: <Moment format="LL">{album.release_date}</Moment>
  </span>
);

const AlbumPresenter = ({ album, t }) => (
  <Body
    breadcrumbSegments={[<Link to="/albums">{t('pages.albums.header')}</Link>, getAlbumName(album)]}
    description={getDescription(album)}
  >
    <Grid>
      <GridRow>
        <GridColumn mobile={16} tablet={6} computer={5}>
          <AlbumCover album={album} />
        </GridColumn>
        <GridColumn mobile={16} tablet={10} computer={11}>
          <AlbumTracks tracks={album.tracks} />
        </GridColumn>
      </GridRow>
    </Grid>
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
};

export default withNamespaces('common')(AlbumPresenter);
