import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Divider, Header } from 'semantic-ui-react';

import Div from '../../components/Div';
import Flex from '../../components/Flex';
import Hero from '../../components/Hero';
import PlayPause from '../../components/PlayPause';
import AlbumCover from '../../components/AlbumCover';
import LinkEntity from '../../components/LinkEntity';
import LinkArtistNames from '../../components/LinkArtistNames';

import Tabs from './track-presenter/Tabs';
import MoreTracks from './track-presenter/MoreTracks';

const TrackPresenter = ({ track }) => (
  <React.Fragment>
    <Hero src={track.coverurl.w800}>
      <Flex fluid row alignCenter>
        <Div mr="16px">
          <PlayPause entity={track} />
        </Div>
        <Flex fluid column justifyCenter>
          <Header as="h1" inverted>
            <LinkEntity entity={track} as="inverted" alternate />
          </Header>
          <Header as="h2" inverted style={{ marginTop: 0 }}>
            <LinkArtistNames artists={track.artists} as="inverted" />
          </Header>
        </Flex>
      </Flex>
    </Hero>
    {/* TODO: Enable ActionsMenu */}
    {/* <ActionsMenu track={track} /> */}
    <Divider style={{ marginTop: 0 }} />
    <Container>
      <Grid divided stackable reversed="mobile">
        <Grid.Column mobile={8} tablet={6} computer={5}>
          <Grid columns={2} doubling>
            <Grid.Column width={16} only="tablet computer">
              <AlbumCover album={track.album} maxWidth={256} />
            </Grid.Column>
            <Grid.Column width={16}>
              <MoreTracks artist={track.artists[0]} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={11}>
          <Tabs track={track} />
        </Grid.Column>
      </Grid>
    </Container>
  </React.Fragment>
);

TrackPresenter.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.object).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    coverurl: PropTypes.shape({
      w800: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TrackPresenter;
