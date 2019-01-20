// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import * as artistActions from '../actions/data/artists';
import * as trackActions from '../actions/data/tracks';
import { getVisibleTracks } from '../reducers/data/tracks';
import type { ArtistFilter, TrackFilter } from '../types';

type Props = {
  fetchArtists: (filter: ArtistFilter) => void,
  fetchTracks: (filter: TrackFilter) => void,
};

class DataStore extends React.PureComponent<Props> {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { fetchArtists, fetchTracks } = this.props;
    fetchArtists('all');
    fetchTracks('all');
  };

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  tracks: getVisibleTracks(state, 'all'),
});

export default connect(
  mapStateToProps,
  {
    fetchArtists: artistActions.fetchArtists,
    fetchTracks: trackActions.fetchTracks,
  },
)(DataStore);
