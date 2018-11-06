import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider } from 'semantic-ui-react';

import Hero from '../../components/Hero';
import AlbumCover from '../../components/AlbumCover';
import Body from '../../components/Body';

import AlbumTracks from './album-presenter/AlbumTracks';

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
    Release date:&nbsp;
    <Moment format="LL">{album.release_date}</Moment>
  </span>
);

const AlbumPresenter = ({ album, t }) => (
  <React.Fragment>
    <Hero entity={album} />
    <Divider style={{ marginTop: 0 }} />
    <Container>
      <Grid divided stackable reversed="mobile">
        <Grid.Column mobile={8} tablet={6} computer={5}>
          <Grid columns={2} doubling>
            <Grid.Column width={16} only="tablet computer">
              <AlbumCover album={album} maxWidth={256} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={11}>
          <Body
            breadcrumbSegments={[
              <Link to="/albums">{t('pages.albums.header')}</Link>,
              getAlbumName(album),
            ]}
            description={getDescription(album)}
          >
            <AlbumTracks tracks={album.tracks} />
          </Body>
        </Grid.Column>
      </Grid>
    </Container>
  </React.Fragment>
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
