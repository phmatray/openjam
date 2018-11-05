import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchTrack } from '../redux/modules/page-track';
import Spinner from '../components/Spinner';
import TrackPresenter from './track/TrackPresenter';

class Track extends Component {
  state = {
    trackId: null,
  };

  componentDidMount() {
    this.setState({ trackId: this.props.match.params.id }, async () => {
      await this.props.fetchTrack(this.state.trackId);
    });
  }

  componentWillReceiveProps(newProps) {
    const { params } = newProps.match;

    if (params.id !== this.state.trackId) {
      this.setState({ trackId: params.id }, async () => {
        await this.props.fetchTrack(this.state.trackId);
      });
    }
  }

  render() {
    const { track, trackLoading } = this.props;
    const mustShowLoading = track === null || track === undefined || trackLoading;
    return mustShowLoading ? <Spinner /> : <TrackPresenter track={track} />;
  }
}

Track.propTypes = {
  fetchTrack: PropTypes.func.isRequired,
  track: PropTypes.object,
  trackLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
  track: state.pageTrack.track,
  trackLoading: state.pageTrack.trackLoading,
});

export default connect(
  mapStateToProps,
  { fetchTrack },
)(Track);
