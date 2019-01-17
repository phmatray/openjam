// @flow
/* eslint-disable no-class-assign */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions/tracks';
import { getVisibleTracks, getErrorMessage, getIsFetching } from '../../reducers/data/tracks';

import TrackList from './visible-track-list/TrackList';
import FetchError from './visible-track-list/FetchError';

type Filter = 'all' | 'original' | 'remix';

type Props = {
  filter: Filter,
  errorMessage?: string,
  tracks: {}[],
  isFetching?: boolean,
  fetchTracks: (filter: Filter) => void,
  toggleTrack: () => void,
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
