// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TrackList from '../components/visible-track-list/TrackList';
import FetchError from '../components/visible-track-list/FetchError';
import * as actions from '../actions/data/tracks';
import { getVisibleTracks, getErrorMessage, getIsFetching } from '../reducers/data/tracks';
import type { TrackBasic, TrackFilter } from '../types';

type Props = {
  filter: TrackFilter,
  errorMessage?: string,
  tracks: TrackBasic[],
  isFetching?: boolean,
  fetchTracks: (filter: TrackFilter) => void,
  toggleTrack: () => void,
};

const Presenter = ({ onRetry, isFetching, errorMessage, toggleTrack, tracks }) => {
  if (isFetching && !tracks.length) {
    return <p>Loading...</p>;
  }

  if (errorMessage && !tracks.length) {
    return <FetchError message={errorMessage} onRetry={() => onRetry()} />;
  }

  return <TrackList tracks={tracks} onTrackClick={toggleTrack} />;
};

class VisibleTrackList extends PureComponent<Props> {
  static defaultProps = {
    isFetching: false,
    errorMessage: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { filter, fetchTracks } = this.props;
    fetchTracks(filter);
  };

  generateProps = () => ({
    ...this.props,
    ...this.state,
    onRetry: this.fetchData,
  });

  render() {
    const props = this.generateProps();
    return <Presenter {...props} />;
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || 'all';
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    tracks: getVisibleTracks(state, filter),
    filter,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    actions,
  )(VisibleTrackList),
);
