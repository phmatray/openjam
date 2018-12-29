import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import HeroSimple from '../components/HeroSimple';
import Section from '../components/Section';
import { fetchOriginalTracks, fetchRemixTracks, fetchArtists } from '../redux/modules/page-explore';
import background from '../images/backgrounds/piano-2601498_1920.jpg';

class Explore extends Component {
  componentDidMount() {
    const {
      originalTracks,
      fetchOriginalTracks,
      remixTracks,
      fetchRemixTracks,
      artists,
      fetchArtists,
    } = this.props;

    if (originalTracks === null) {
      fetchOriginalTracks();
    }

    if (remixTracks === null) {
      fetchRemixTracks();
    }

    if (artists === null) {
      fetchArtists();
    }
  }

  render() {
    const { originalTracks, remixTracks, artists, t } = this.props;

    return (
      <React.Fragment>
        <HeroSimple
          background={background}
          header={t('pages.explore.header')}
          subheader={t('pages.explore.subheader')}
        />

        <Container>
          {originalTracks !== null && (
            <Section
              title={t('pages.explore.original-titles')}
              items={originalTracks}
              to="/tracks/originals"
              maxHeight={256}
            />
          )}
          {remixTracks !== null && (
            <Section
              title={t('pages.explore.remix-titles')}
              items={remixTracks.slice(0, 32)}
              to="/tracks/remixes"
              maxHeight={256}
            />
          )}
          {artists !== null && (
            <Section
              title={t('pages.explore.artists')}
              items={artists.slice(0, 16)}
              to="/artists"
              maxHeight={512}
              showDivider={false}
            />
          )}
        </Container>
      </React.Fragment>
    );
  }
}

Explore.propTypes = {
  fetchOriginalTracks: PropTypes.func.isRequired,
  fetchRemixTracks: PropTypes.func.isRequired,
  fetchArtists: PropTypes.func.isRequired,
  originalTracks: PropTypes.array,
  remixTracks: PropTypes.array,
  artists: PropTypes.array,
};

Explore.defaultProps = {
  originalTracks: null,
  remixTracks: null,
  artists: null,
};

const mapStateToProps = state => ({
  originalTracks: state.pageExplore.originalTracks,
  originalTracksLoading: state.pageExplore.originalTracksLoading,
  remixTracks: state.pageExplore.remixTracks,
  remixTracksLoading: state.pageExplore.remixTracksLoading,
  artists: state.pageExplore.artists,
  artistsLoading: state.pageExplore.artistsLoading,
});

export default connect(
  mapStateToProps,
  {
    fetchOriginalTracks,
    fetchRemixTracks,
    fetchArtists,
  },
)(withNamespaces('common')(Explore));
