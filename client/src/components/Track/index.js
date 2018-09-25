import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTrack } from '../../redux/modules/track';
import Spinner from '../common/Spinner';
import TrackPresenter from './presenter';

class Track extends Component {
  state = {
    trackId: null,
  };

  componentWillReceiveProps(newProps) {
    var params = newProps.match.params;

    if (params.id !== this.state.trackId)
      this.setState({ trackId: params.id }, () => this.props.fetchTrack(this.state.trackId));
  }

  componentDidMount() {
    this.setState({ trackId: this.props.match.params.id }, () =>
      this.props.fetchTrack(this.state.trackId),
    );
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
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  track: state.track,
});

export default connect(
  mapStateToProps,
  { fetchTrack },
)(Track);
