/* eslint-disable no-class-assign */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions';
import { getVisibleTracks, getErrorMessage, getIsFetching } from '../../reducers/data/tracks';

import TrackList from './visible-track-list/TrackList';
import FetchError from './visible-track-list/FetchError';

class VisibleTrackList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTracks } = this.props;
    fetchTracks(filter);
  }

  render() {
    const { isFetching, errorMessage, toggleTrack, tracks } = this.props;
    if (isFetching && !tracks.length) {
      return <p>Loading...</p>;
    }
    if (errorMessage && !tracks.length) {
      return <FetchError message={errorMessage} onRetry={() => this.fetchData()} />;
    }

    return <TrackList tracks={tracks} onTrackClick={toggleTrack} />;
  }
}

VisibleTrackList.propTypes = {
  filter: PropTypes.oneOf(['all', 'original', 'remix']).isRequired,
  errorMessage: PropTypes.string,
  tracks: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  fetchTracks: PropTypes.func.isRequired,
  toggleTrack: PropTypes.func.isRequired,
};

VisibleTrackList.defaultProps = {
  isFetching: false,
  errorMessage: null,
};

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    tracks: getVisibleTracks(state, filter),
    filter,
  };
};

VisibleTrackList = withRouter(
  connect(
    mapStateToProps,
    actions,
  )(VisibleTrackList),
);

export default VisibleTrackList;
