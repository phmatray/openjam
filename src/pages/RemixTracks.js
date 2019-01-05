import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import Spinner from '../components/Spinner';
import background from '../images/backgrounds/digital-1744118_1920.jpg';
import {
  fetchRemixTracks,
  getRemixTracks,
  getRemixTracksLoading,
} from '../redux/modules/page-explore';

import TracksPresenter from './tracks/TracksPresenter';

class RemixTracks extends Component {
  componentDidMount() {
    const { remixTracks } = this.props;

    if (remixTracks === null) {
      this.props.fetchRemixTracks();
    }
  }

  render() {
    const { remixTracks, remixTracksLoading, t } = this.props;

    if (remixTracks === null || remixTracksLoading) {
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

RemixTracks.propTypes = {
  fetchRemixTracks: PropTypes.func.isRequired,
  remixTracks: PropTypes.array,
  remixTracksLoading: PropTypes.bool.isRequired,
};

RemixTracks.defaultProps = {
  remixTracks: null,
};

const mapStateToProps = state => ({
  remixTracks: getRemixTracks(state),
  remixTracksLoading: getRemixTracksLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchRemixTracks },
)(withNamespaces('common')(RemixTracks));
