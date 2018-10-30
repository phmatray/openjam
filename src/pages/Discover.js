import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from './discover/Section';
import Body from '../components/Body';

import { fetchPlaylists } from '../redux/modules/playlist';
import { fetchTracks } from '../redux/modules/track';
import { fetchArtists } from '../redux/modules/artist';
import { fetchAlbums } from '../redux/modules/album';
import { fetchLabels } from '../redux/modules/label';

export class Discover extends Component {
  componentDidMount() {
    const { fetchPlaylists, fetchTracks, fetchArtists, fetchAlbums, fetchLabels } = this.props;

    fetchPlaylists();
    fetchTracks();
    fetchArtists();
    fetchAlbums();
    fetchLabels();
  }

  render() {
    const { playlists, tracks, artists, albums, labels } = this.props;

    return (
      <Body
        breadcrumbSegments={['Discover']}
        description="Choose from a selection of playlists, albums, artists, tracks or labels."
      >
        {playlists !== null && (
          <Section title="Playlists" items={playlists.slice(0, 10)} to="/playlists" />
        )}
        {artists !== null && <Section title="Artists" items={artists.slice(0, 9)} to="/artists" />}
        {tracks !== null && <Section title="Tracks" items={tracks.slice(0, 21)} to="/tracks" />}
        {albums !== null && <Section title="Albums" items={albums.slice(0, 20)} to="/albums" />}
        {labels !== null && <Section title="Labels" items={labels.slice(0, 20)} to="/labels" />}
      </Body>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlist.playlists,
  tracks: state.track.tracks,
  artists: state.artist.artists,
  albums: state.album.albums,
  labels: state.label.labels,
});

export default connect(
  mapStateToProps,
  {
    fetchPlaylists,
    fetchTracks,
    fetchArtists,
    fetchAlbums,
    fetchLabels,
  },
)(Discover);
