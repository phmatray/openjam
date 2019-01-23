// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import background from 'assets/images/backgrounds/vinyl-2592068_1920.jpg';
import { fetchTracks, selectTracks, selectIsFetching } from 'store/modules/data/tracks';
import type { TrackBasic } from 'lib/types';
import Spinner from 'views/components/Spinner';

import Presenter from './Tracks.presenter';

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
      <Presenter
        tracks={tracks}
        header={t('pages.tracks.header')}
        subheader={t('pages.tracks.subheader')}
        background={background}
      />
    );
  }
}

const mapStateToProps = state => ({
  tracks: selectTracks(state),
  loading: selectIsFetching(state),
});

export default connect(
  mapStateToProps,
  { fetchTracks },
)(withNamespaces('common')(Tracks));
