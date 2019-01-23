// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import background from 'assets/images/backgrounds/vinyl-2592068_1920.jpg';
import { fetchOriginalTracks, getOriginalTracksLoading } from 'store/modules/ui/views/explore';
import Selectors from 'selectors/original-tracks';
import type { TrackBasic } from 'lib/types';
import Spinner from 'views/components/Spinner';

import Presenter from '../Tracks/Tracks.container';

type Props = {
  fetchOriginalTracks: () => void,
  originalTracks?: TrackBasic[],
  originalTracksLoading: boolean,
  t: any,
};

class OriginalTracks extends PureComponent<Props> {
  static defaultProps = {
    originalTracks: null,
  };

  componentDidMount() {
    const { originalTracks } = this.props;

    if (originalTracks === null) {
      this.props.fetchOriginalTracks();
    }
  }

  render() {
    const { originalTracks, originalTracksLoading, t } = this.props;

    if (originalTracks === null || originalTracks === undefined || originalTracksLoading) {
      return <Spinner />;
    }
    if (originalTracks.length === 0) {
      return <h4>No tracks found...</h4>;
    }

    return (
      <Presenter
        tracks={originalTracks}
        header={t('pages.original-tracks.header')}
        subheader={t('pages.original-tracks.subheader')}
        background={background}
      />
    );
  }
}

const mapStateToProps = state => ({
  originalTracks: Selectors.selectOriginalTracks(state),
  originalTracksLoading: Selectors.selectOriginalTracksLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchOriginalTracks },
)(withNamespaces('common')(OriginalTracks));
