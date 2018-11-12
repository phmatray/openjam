import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Divider, Header } from 'semantic-ui-react';

import Div from '../components/Div';
import Flex from '../components/Flex';
import Hero from '../components/Hero';
import PlayPause from '../components/PlayPause';
import AlbumCover from '../components/AlbumCover';
import LinkEntity from '../components/LinkEntity';
import LinkArtistNames from '../components/LinkArtistNames';
import EntityContainerHOC from '../hocs/buildEntityContainer';
import { fetchTrack } from '../redux/modules/page-track';

import Tabs from './track/Tabs';
import MoreTracks from './track/MoreTracks';

const Track = ({ entity }) => (
  <React.Fragment>
    <Hero src={entity.coverurl.w800}>
      <Flex fluid row alignCenter>
        <Div mr="16px">
          <PlayPause entity={entity} />
        </Div>
        <Flex fluid column justifyCenter>
          <Header as="h1" inverted>
            <LinkEntity entity={entity} as="inverted" alternate />
          </Header>
          <Header as="h2" inverted style={{ marginTop: 0 }}>
            <LinkArtistNames artists={entity.artists} as="inverted" />
          </Header>
        </Flex>
      </Flex>
    </Hero>
    {/* TODO: Enable ActionsMenu */}
    {/* <ActionsMenu track={entity} /> */}
    <Divider style={{ marginTop: 0 }} />
    <Container>
      <Grid divided stackable reversed="mobile">
        <Grid.Column mobile={8} tablet={6} computer={5}>
          <Grid columns={2} doubling>
            <Grid.Column width={16} only="tablet computer">
              <AlbumCover album={entity.album} maxWidth={256} />
            </Grid.Column>
            <Grid.Column width={16}>
              <MoreTracks artist={entity.artists[0]} />
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

Track.propTypes = {
  entity: PropTypes.shape({
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

const mapStateToProps = state => ({
  entity: state.pageTrack.track,
  loading: state.pageTrack.trackLoading,
});

export default EntityContainerHOC(Track, mapStateToProps, { fetchEntity: fetchTrack });
