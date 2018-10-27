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

    return tracks === null || loading ? (
      <Spinner />
    ) : tracks.length > 0 ? (
      <TracksPresenter tracks={tracks} />
    ) : (
      <h4>No tracks found...</h4>
    );
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
