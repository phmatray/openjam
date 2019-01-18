// @flow

import React from 'react';
import { Container, Grid, Divider, Header } from 'semantic-ui-react';

import Div from '../components/Div';
import Flex from '../components/Flex';
import Hero from '../components/Hero';
import AlbumCover from '../components/AlbumCover';
import LinkEntity from '../components/LinkEntity';
import LinkArtistNames from '../components/LinkArtistNames';
import EntityContainerHOC from '../hocs/buildEntityContainer';
import PlayPause from '../containers/PlayPause';
import MoreTracks from '../containers/MoreTracks';
import { fetchTrack, getTrack } from '../reducers/ui/views/track';

import ActionsMenu from './track/ActionsMenu';
import Tabs from './track/Tabs';

type Props = {
  entity: {
    title: string,
    artists: [{ artist: {} }],
    albums: [{ album: { name: string } }],
    coverurl: {
      w800: string,
    },
  },
};

const Track = ({ entity }: Props) => (
  <React.Fragment>
    <Hero src={entity.coverurl.w800}>
      <Flex fluid row alignCenter>
        <Div mr="16px">
          <PlayPause entity={entity} />
        </Div>
        <Div mr="16px">
          <Flex fluid column justifyCenter>
            <Header as="h1" inverted>
              <LinkEntity entity={entity} as="inverted" alternate />
            </Header>
            <Header as="h2" inverted style={{ marginTop: 0 }}>
              <LinkArtistNames artists={entity.artists.map(a => a.artist)} as="inverted" />
            </Header>
          </Flex>
        </Div>
      </Flex>
    </Hero>

    {/* TODO: Enable ActionsMenu */}
    <ActionsMenu track={entity} />
    <Divider style={{ marginTop: 0 }} />

    <Container>
      <Grid divided stackable reversed="mobile">
        <Grid.Column mobile={8} tablet={6} computer={5}>
          <Grid columns={2} doubling>
            <Grid.Column width={16} only="tablet computer">
              <AlbumCover album={entity.albums.map(a => a.album)[0]} maxWidth={256} />
            </Grid.Column>
            <Grid.Column width={16}>
              <MoreTracks artist={entity.artists.map(a => a.artist)[0]} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={11}>
          <Tabs track={entity} />
        </Grid.Column>
      </Grid>
    </Container>
  </React.Fragment>
);

const mapStateToProps = state => ({
  entity: getTrack(state),
});

export default EntityContainerHOC(Track, mapStateToProps, { fetchEntity: fetchTrack });
