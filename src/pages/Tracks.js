import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTracks } from '../redux/modules/track';
import Spinner from '../components/Spinner';
import TracksPresenter from './tracks/TracksPresenter';

class Tracks extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { tracks, loading } = this.props;

    if (tracks === null || loading) {
      return <Spinner />;
    }
    if (tracks.length === 0) {
      return <h4>No tracks found...</h4>;
    }
    return <TracksPresenter tracks={tracks} />;
  }
}

Tracks.propTypes = {
  fetchTracks: PropTypes.func.isRequired,
  tracks: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  tracks: state.track.tracks,
  loading: state.track.loading,
});

export default connect(
  mapStateToProps,
  { fetchTracks },
)(Tracks);
