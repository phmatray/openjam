import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import Spinner from '../components/Spinner';
import background from '../assets/images/backgrounds/vinyl-2592068_1920.jpg';
import { fetchTracks, getTracks, getLoading } from '../reducers/data/track';

import TracksPresenter from './tracks/TracksPresenter';

class Tracks extends PureComponent {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { tracks, loading, t } = this.props;

    if (tracks === null || loading) {
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

Tracks.propTypes = {
  fetchTracks: PropTypes.func.isRequired,
  tracks: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

Tracks.defaultProps = {
  tracks: null,
};

const mapStateToProps = state => ({
  tracks: getTracks(state),
  loading: getLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchTracks },
)(withNamespaces('common')(Tracks));
