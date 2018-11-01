import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
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
    const { playlists, tracks, artists, albums, labels, t } = this.props;

    return (
      <Body
        breadcrumbSegments={[t('pages.discover.header')]}
        description={t('pages.discover.subheader')}
      >
        {playlists !== null && (
          <Section
            title={t('pages.discover.playlists')}
            items={playlists.slice(0, 10)}
            to="/playlists"
          />
        )}
        {artists !== null && (
          <Section title={t('pages.discover.artists')} items={artists.slice(0, 9)} to="/artists" />
        )}
        {tracks !== null && (
          <Section title={t('pages.discover.tracks')} items={tracks.slice(0, 21)} to="/tracks" />
        )}
        {albums !== null && (
          <Section title={t('pages.discover.albums')} items={albums.slice(0, 20)} to="/albums" />
        )}
        {labels !== null && (
          <Section title={t('pages.discover.labels')} items={labels.slice(0, 20)} to="/labels" />
        )}
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
)(withNamespaces('common')(Discover));
