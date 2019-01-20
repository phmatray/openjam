// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import Spinner from '../components/Spinner';
import background from '../assets/images/backgrounds/vinyl-2592068_1920.jpg';
import * as actions from '../actions/data/tracks';
import { getVisibleTracks, getIsFetching } from '../reducers/data/tracks';
import type { TrackBasic } from '../types';

import TracksPresenter from './tracks/TracksPresenter';

type Props = {
  fetchTracks: () => void,
  tracks?: TrackBasic[],
  loading: boolean,
  t: any,
};

class Tracks extends PureComponent<Props> {
  static defaultProps = {
    tracks: null,
  };

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { tracks, loading, t } = this.props;

    if (tracks === null || tracks === undefined || loading) {
      return <Spinner />;
    }
    if (tracks.length === 0) {
      return <h4>No tracks found...</h4>;
    }

    return (
      <TracksPresenter
        tracks={tracks}
        header={t('pages.tracks.header')}
        subheader={t('pages.tracks.subheader')}
        background={background}
      />
    );
  }
}

const mapStateToProps = state => ({
  tracks: getVisibleTracks(state),
  loading: getIsFetching(state),
});

export default connect(
  mapStateToProps,
  actions,
)(withNamespaces('common')(Tracks));
