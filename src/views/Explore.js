// @flow

import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import Div from '../components/Div';
import HeroSimple from '../components/HeroSimple';
import Section from '../components/Section';
import {
  fetchOriginalTracks,
  fetchRemixTracks,
  fetchArtists,
  getOriginalTracks,
  getOriginalTracksLoading,
  getRemixTracks,
  getRemixTracksLoading,
  getArtists,
  getArtistsLoading,
} from '../reducers/ui/views/explore';
import background from '../assets/images/backgrounds/piano-2601498_1920.jpg';
import type { ArtistBasic, TrackBasic } from '../types';

import ActionsMenu from './explore/ActionsMenu';

type Props = {
  fetchOriginalTracks: () => void,
  fetchRemixTracks: () => void,
  fetchArtists: () => void,
  originalTracks?: TrackBasic[],
  remixTracks?: TrackBasic[],
  artists?: ArtistBasic[],
  t: any,
};

class Explore extends PureComponent<Props> {
  static defaultProps = {
    originalTracks: null,
    remixTracks: null,
    artists: null,
  };

  componentDidMount() {
    const {
      originalTracks,
      fetchOriginalTracks,
      remixTracks,
      fetchRemixTracks,
      artists,
      fetchArtists,
    } = this.props;

    if (originalTracks === null) {
      fetchOriginalTracks();
    }

    if (remixTracks === null) {
      fetchRemixTracks();
    }

    if (artists === null) {
      fetchArtists();
    }
  }

  render() {
    const { originalTracks, remixTracks, artists, t } = this.props;

    return (
      <React.Fragment>
        <HeroSimple
          background={background}
          header={t('pages.explore.header')}
          subheader={t('pages.explore.subheader')}
          divider={false}
        />

        <Div mt="1em" mb="1em">
          <ActionsMenu />
        </Div>

        <Div mb="1em">
          <Container>
            {originalTracks !== null && originalTracks !== undefined && (
              <Section
                title={t('pages.explore.original-titles')}
                items={originalTracks.slice(0, 32)}
                to="/tracks/originals"
                maxHeight={256}
              />
            )}
            {remixTracks !== null && remixTracks !== undefined && (
              <Section
                title={t('pages.explore.remix-titles')}
                items={remixTracks.slice(0, 32)}
                to="/tracks/remixes"
                maxHeight={256}
              />
            )}
            {artists !== null && artists !== undefined && (
              <Section
                title={t('pages.explore.artists')}
                items={artists.slice(0, 16)}
                to="/artists"
                maxHeight={512}
                showDivider={false}
              />
            )}
          </Container>
        </Div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  originalTracks: getOriginalTracks(state),
  originalTracksLoading: getOriginalTracksLoading(state),
  remixTracks: getRemixTracks(state),
  remixTracksLoading: getRemixTracksLoading(state),
  artists: getArtists(state),
  artistsLoading: getArtistsLoading(state),
});

export default connect(
  mapStateToProps,
  {
    fetchOriginalTracks,
    fetchRemixTracks,
    fetchArtists,
  },
)(withNamespaces('common')(Explore));
