import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrack } from '../redux/modules/track';
import Spinner from '../components/Spinner';
import TrackPresenter from './track/TrackPresenter';

class Track extends Component {
  state = {
    trackId: null,
  };

  componentDidMount() {
    this.setState({ trackId: this.props.match.params.id }, () =>
      this.props.fetchTrack(this.state.trackId),
    );
  }

  componentWillReceiveProps(newProps) {
    const { params } = newProps.match;

    if (params.id !== this.state.trackId)
      this.setState({ trackId: params.id }, () => this.props.fetchTrack(this.state.trackId));
  }

  render() {
    const { track, loading } = this.props.track;

    return track === null || track === undefined || loading ? (
      <Spinner />
    ) : (
      <TrackPresenter track={track} />
    );
  }
}

Track.propTypes = {
  fetchTrack: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  track: state.track,
});

export default connect(
  mapStateToProps,
  { fetchTrack },
)(Track);
