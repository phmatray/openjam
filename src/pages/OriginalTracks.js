import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import Spinner from '../components/Spinner';
import background from '../images/backgrounds/vinyl-2592068_1920.jpg';
import {
  fetchOriginalTracks,
  getOriginalTracks,
  getOriginalTracksLoading,
} from '../redux/modules/page-explore';

import TracksPresenter from './tracks/TracksPresenter';

class OriginalTracks extends Component {
  componentDidMount() {
    const { originalTracks } = this.props;

    if (originalTracks === null) {
      this.props.fetchOriginalTracks();
    }
  }

  render() {
    const { originalTracks, originalTracksLoading, t } = this.props;

    if (originalTracks === null || originalTracksLoading) {
      return <Spinner />;
    }
    if (originalTracks.length === 0) {
      return <h4>No tracks found...</h4>;
    }

    return (
      <TracksPresenter
        tracks={originalTracks}
        header={t('pages.original-tracks.header')}
        subheader={t('pages.original-tracks.subheader')}
        background={background}
      />
    );
  }
}

OriginalTracks.propTypes = {
  fetchOriginalTracks: PropTypes.func.isRequired,
  originalTracks: PropTypes.array,
  originalTracksLoading: PropTypes.bool.isRequired,
};

OriginalTracks.defaultProps = {
  originalTracks: null,
};

const mapStateToProps = state => ({
  originalTracks: getOriginalTracks(state),
  originalTracksLoading: getOriginalTracksLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchOriginalTracks },
)(withNamespaces('common')(OriginalTracks));
