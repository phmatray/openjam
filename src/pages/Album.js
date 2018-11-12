import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider, Header } from 'semantic-ui-react';

import Div from '../components/Div';
import Flex from '../components/Flex';
import Hero from '../components/Hero';
import PlayPause from '../components/PlayPause';
import AlbumCover from '../components/AlbumCover';
import LinkEntity from '../components/LinkEntity';
import Body from '../components/Body';
import EntityContainerHOC from '../hocs/buildEntityContainer';
import { fetchAlbum } from '../redux/modules/page-album';

import AlbumTracks from './album/AlbumTracks';
import Description from './album/Description';

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

const Album = ({ entity, t }) => (
  <React.Fragment>
    <Hero src={entity.tracks[0].coverurl.w800}>
      <Flex fluid row alignCenter>
        <Div mr="16px">
          <PlayPause entity={entity} />
        </Div>
        <Flex fluid column justifyCenter>
          <Header as="h1" inverted>
            <LinkEntity entity={entity} as="inverted" alternate />
          </Header>
        </Flex>
      </Flex>
    </Hero>
    <Divider style={{ marginTop: 0 }} />

    <Container>
      <Grid divided stackable reversed="mobile">
        <Grid.Column mobile={8} tablet={6} computer={5}>
          <Grid columns={2} doubling>
            <Grid.Column width={16} only="tablet computer">
              <AlbumCover album={entity} maxWidth={256} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={11}>
          <Body
            breadcrumbSegments={[
              <Link to="/albums">{t('pages.albums.header')}</Link>,
              getAlbumName(entity),
            ]}
            description={<Description releaseDate={entity.release_date} />}
          >
            <AlbumTracks tracks={entity.tracks} />
          </Body>
        </Grid.Column>
      </Grid>
    </Container>
  </React.Fragment>
);

Album.propTypes = {
  entity: PropTypes.shape({
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

const mapStateToProps = state => ({
  entity: state.pageAlbum.album,
  loading: state.pageAlbum.albumLoading,
});

export default EntityContainerHOC(withNamespaces('common')(Album), mapStateToProps, {
  fetchEntity: fetchAlbum,
});
