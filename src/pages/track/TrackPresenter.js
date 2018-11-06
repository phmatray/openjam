import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Divider } from 'semantic-ui-react';

import Hero from '../../components/Hero';
import AlbumCover from '../../components/AlbumCover';

import Tabs from './track-presenter/Tabs';
import MoreTracks from './track-presenter/MoreTracks';

const TrackPresenter = ({ track }) => (
  <React.Fragment>
    <Hero entity={track} />
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
      w400: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default TrackPresenter;
