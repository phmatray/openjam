// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  fetchTracks,
  selectTracks,
  selectErrorMessage,
  selectIsFetching,
} from 'store/modules/data/tracks';
import type { TrackBasic, TrackFilter } from 'lib/types';

import TrackList from './children/TrackList';
import FetchError from './children/FetchError';

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
    isFetching: selectIsFetching(state, filter),
    errorMessage: selectErrorMessage(state, filter),
    tracks: selectTracks(state, filter),
    filter,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchTracks },
  )(VisibleTrackList),
);
