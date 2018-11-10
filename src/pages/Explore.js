import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Header, Container, Divider } from 'semantic-ui-react';

import Flex from '../components/Flex';
import Hero from '../components/Hero';
import background from '../images/backgrounds/piano-2601498_1920.jpg';
import Section from './explore/Section';

import { fetchPlaylists } from '../redux/modules/playlist';
import { fetchTracks } from '../redux/modules/track';
import { fetchArtists } from '../redux/modules/artist';
import { fetchAlbums } from '../redux/modules/album';
import { fetchLabels } from '../redux/modules/label';

export class Explore extends Component {
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
      <React.Fragment>
        <Hero src={background}>
          <Flex fluid row alignCenter>
            <div style={{ color: 'white', maxWidth: '400px' }}>
              <Header as="h1" inverted>
                {t('pages.explore.header')}
              </Header>
              <Header as="h3" inverted>
                {t('pages.explore.subheader')}
              </Header>
              <br />
            </div>
          </Flex>
        </Hero>
        <Divider style={{ marginTop: 0, marginBottom: 32 }} />

        <Container>
          <Section
            title={t('pages.explore.tracks')}
            items={tracks.slice(0, 32)}
            to="/tracks"
            maxHeight={256}
          />
          )}
          {artists !== null && (
            <Section
              title={t('pages.explore.artists')}
              items={artists.slice(0, 16)}
              to="/artists"
              maxHeight={512}
            />
          )}
          {playlists !== null && (
            <Section
              title={t('pages.explore.playlists')}
              items={playlists.slice(0, 8)}
              to="/playlists"
              maxHeight={512}
            />
          )}
          {albums !== null && (
            <Section
              title={t('pages.explore.albums')}
              items={albums.slice(0, 16)}
              to="/albums"
              maxHeight={512}
            />
          )}
          {labels !== null && (
            <Section
              title={t('pages.explore.labels')}
              items={labels.slice(0, 16)}
              to="/labels"
              maxHeight={512}
              showDivider={false}
            />
          )}
        </Container>
      </React.Fragment>
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
)(withNamespaces('common')(Explore));
