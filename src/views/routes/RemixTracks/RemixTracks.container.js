// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import background from 'assets/images/backgrounds/digital-1744118_1920.jpg';
import Selectors from 'selectors/remix-tracks';
import type { TrackBasic } from 'lib/types';
import Spinner from 'views/components/Spinner';

import Presenter from '../Tracks/Tracks.presenter';

type Props = {
  remixTracks?: TrackBasic[],
  remixTracksLoading: boolean,
  t: any,
};

class RemixTracks extends PureComponent<Props> {
  static defaultProps = {
    remixTracks: null,
  };

  render() {
    const { remixTracks, remixTracksLoading, t } = this.props;

    if (remixTracks === null || remixTracks === undefined || remixTracksLoading) {
      return <Spinner />;
    }
    if (remixTracks.length === 0) {
      return <h4>No tracks found...</h4>;
    }

    return (
      <Presenter
        tracks={remixTracks}
        header={t('pages.remix-tracks.header')}
        subheader={t('pages.remix-tracks.subheader')}
        background={background}
      />
    );
  }
}

const mapStateToProps = state => ({
  remixTracks: Selectors.selectRemixTracks(state),
  remixTracksLoading: Selectors.selectRemixTracksLoading(state),
});

export default connect(mapStateToProps)(withNamespaces('common')(RemixTracks));
