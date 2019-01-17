// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import Spinner from '../components/Spinner';
import background from '../assets/images/backgrounds/digital-1744118_1920.jpg';
import {
  fetchRemixTracks,
  getRemixTracks,
  getRemixTracksLoading,
} from '../reducers/ui/views/explore';

import TracksPresenter from './tracks/TracksPresenter';

type Props = {
  fetchRemixTracks: () => void,
  remixTracks?: {}[],
  remixTracksLoading: boolean,
  t: any,
};

class RemixTracks extends PureComponent<Props> {
  static defaultProps = {
    remixTracks: null,
  };

  componentDidMount() {
    const { remixTracks } = this.props;

    if (remixTracks === null) {
      this.props.fetchRemixTracks();
    }
  }

  render() {
    const { remixTracks, remixTracksLoading, t } = this.props;

    if (remixTracks === null || remixTracks === undefined || remixTracksLoading) {
      return <Spinner />;
    }
    if (remixTracks.length === 0) {
      return <h4>No tracks found...</h4>;
    }

    return (
      <TracksPresenter
        tracks={remixTracks}
        header={t('pages.remix-tracks.header')}
        subheader={t('pages.remix-tracks.subheader')}
        background={background}
      />
    );
  }
}

const mapStateToProps = state => ({
  remixTracks: getRemixTracks(state),
  remixTracksLoading: getRemixTracksLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchRemixTracks },
)(withNamespaces('common')(RemixTracks));
