// @flow

import React, { PureComponent } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';

import Selectors from 'selectors/explore';
import {
  fetchOriginalTracks,
  fetchRemixTracks,
  fetchArtists,
} from 'store/modules/ui/views/explore';
import type { ArtistBasic, TrackBasic } from 'lib/types';

import Presenter from './Explore.presenter';

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
    // // const {
    // //   originalTracks,
    // //   fetchOriginalTracks,
    // //   remixTracks,
    // //   fetchRemixTracks,
    // //   artists,
    // //   fetchArtists,
    // // } = this.props;
    // // if (originalTracks === null) {
    // //   fetchOriginalTracks();
    // // }
    // // if (remixTracks === null) {
    // //   fetchRemixTracks();
    // // }
    // // if (artists === null) {
    // //   fetchArtists();
    // // }
  }

  render() {
    const { originalTracks, remixTracks, artists, t } = this.props;

    return (
      <Presenter
        originalTracks={originalTracks}
        remixTracks={remixTracks}
        artists={artists}
        t={t}
      />
    );
  }
}

const mapStateToProps = state => ({
  originalTracks: Selectors.selectOriginalTracks(state),
  originalTracksLoading: Selectors.selectOriginalTracksLoading(state),
  remixTracks: Selectors.selectRemixTracks(state),
  remixTracksLoading: Selectors.selectRemixTracksLoading(state),
  artists: Selectors.selectArtists(state),
  artistsLoading: Selectors.selectArtistsLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchOriginalTracks, fetchRemixTracks, fetchArtists },
)(withNamespaces('common')(Explore));
