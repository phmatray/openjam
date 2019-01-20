// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import * as albumActions from '../actions/data/albums';
import * as artistActions from '../actions/data/artists';
import * as labelActions from '../actions/data/labels';
import * as playlistActions from '../actions/data/playlists';
import * as trackActions from '../actions/data/tracks';
import { getVisibleAlbums } from '../reducers/data/albums';
import { getVisibleArtists } from '../reducers/data/artists';
import { getVisibleLabels } from '../reducers/data/labels';
import { getVisiblePlaylists } from '../reducers/data/playlists';
import { getVisibleTracks } from '../reducers/data/tracks';
import type { AlbumFilter, ArtistFilter, LabelFilter, PlaylistFilter, TrackFilter } from '../types';

type Props = {
  fetchAlbums: (filter: AlbumFilter) => void,
  fetchArtists: (filter: ArtistFilter) => void,
  fetchLabels: (filter: LabelFilter) => void,
  fetchPlaylists: (filter: PlaylistFilter) => void,
  fetchTracks: (filter: TrackFilter) => void,
};

class DataStore extends React.PureComponent<Props> {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { fetchAlbums, fetchArtists, fetchLabels, fetchPlaylists, fetchTracks } = this.props;
    fetchAlbums('all');
    fetchArtists('all');
    fetchLabels('all');
    fetchPlaylists('all');
    fetchTracks('all');
  };

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  albums: getVisibleAlbums(state, 'all'),
  artists: getVisibleArtists(state, 'all'),
  labels: getVisibleLabels(state, 'all'),
  playlists: getVisiblePlaylists(state, 'all'),
  tracks: getVisibleTracks(state, 'all'),
});

export default connect(
  mapStateToProps,
  {
    fetchAlbums: albumActions.fetchAlbums,
    fetchArtists: artistActions.fetchArtists,
    fetchLabels: labelActions.fetchLabels,
    fetchPlaylists: playlistActions.fetchPlaylists,
    fetchTracks: trackActions.fetchTracks,
  },
)(DataStore);
