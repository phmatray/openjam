import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import Spinner from '../components/Spinner';
import background from '../images/backgrounds/vinyl-2592068_1920.jpg';
import { fetchOriginalTracks } from '../redux/modules/page-explore';

import TracksPresenter from './tracks/TracksPresenter';

class OriginalTracks extends Component {
  componentDidMount() {
    this.props.fetchOriginalTracks();
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

const mapStateToProps = state => ({
  originalTracks: state.pageExplore.originalTracks,
  originalTracksLoading: state.pageExplore.originalTracksLoading,
});

export default connect(
  mapStateToProps,
  { fetchOriginalTracks },
)(withNamespaces('common')(OriginalTracks));
