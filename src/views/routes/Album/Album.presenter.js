// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider, Header } from 'semantic-ui-react';

import AlbumCover from 'views/components/AlbumCover';
import Body from 'views/components/Body';
import Hero from 'views/components/Hero';
import LinkEntity from 'views/components/LinkEntity';
import PlayPause from 'views/components/PlayPause';
import { Div, Flex } from 'views/elements';
import type { AlbumBasic } from 'lib/types';

import AlbumTracks from './children/AlbumTracks';
import Description from './children/Description';

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

export default Album;
