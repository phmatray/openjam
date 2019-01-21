// @flow

import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider, Header } from 'semantic-ui-react';

import Div from '../components/Div';
import Flex from '../components/Flex';
import Hero from '../components/Hero';
import AlbumCover from '../components/AlbumCover';
import LinkEntity from '../components/LinkEntity';
import Body from '../components/Body';
import EntityContainerHOC from '../hocs/buildEntityContainer';
import PlayPause from '../containers/PlayPause';
import { getAlbum } from '../reducers/ui/views/album.reducer';
// // import { fetchAlbum, getAlbum, getAlbumLoading } from '../reducers/ui/views/album';
import type { AlbumBasic } from '../types';

import AlbumTracks from './album/AlbumTracks';
import Description from './album/Description';

type Props = {
  entity: AlbumBasic,
  t: any,
};

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

const Album = ({ entity, t }: Props) => (
  <React.Fragment>
    <Hero src={entity.tracks[0].track.coverurl.w800}>
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

const mapStateToProps = state => ({
  entity: getAlbum(state),
  // // loading: getAlbumLoading(state),
});

export default EntityContainerHOC(withNamespaces('common')(Album), mapStateToProps, {
  // // fetchEntity: fetchAlbum,
});
