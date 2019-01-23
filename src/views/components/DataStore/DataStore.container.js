// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import * as Action from 'store/actions';

type Props = {
  fetchAlbums: () => void,
  fetchArtists: () => void,
  fetchLabels: () => void,
  fetchPlaylists: () => void,
  fetchTracks: () => void,
};

class DataStore extends React.PureComponent<Props> {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { fetchAlbums, fetchArtists, fetchLabels, fetchPlaylists, fetchTracks } = this.props;

    fetchAlbums();
    fetchArtists();
    fetchLabels();
    fetchPlaylists();
    fetchTracks();
  };

  render() {
    return null;
  }
}

export default connect(
  null,
  {
    fetchAlbums: Action.fetchAlbums,
    fetchArtists: Action.fetchArtists,
    fetchLabels: Action.fetchLabels,
    fetchPlaylists: Action.fetchPlaylists,
    fetchTracks: Action.fetchTracks,
  },
)(DataStore);
