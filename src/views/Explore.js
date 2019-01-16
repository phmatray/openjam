import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';

import HeroSimple from '../components/HeroSimple';
import Section from '../components/Section';
import {
  fetchOriginalTracks,
  fetchRemixTracks,
  fetchArtists,
  getOriginalTracks,
  getOriginalTracksLoading,
  getRemixTracks,
  getRemixTracksLoading,
  getArtists,
  getArtistsLoading,
} from '../reducers/ui/views/explore';
import background from '../assets/images/backgrounds/piano-2601498_1920.jpg';

class Explore extends PureComponent {
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
  originalTracks: getOriginalTracks(state),
  originalTracksLoading: getOriginalTracksLoading(state),
  remixTracks: getRemixTracks(state),
  remixTracksLoading: getRemixTracksLoading(state),
  artists: getArtists(state),
  artistsLoading: getArtistsLoading(state),
});

export default connect(
  mapStateToProps,
  {
    fetchOriginalTracks,
    fetchRemixTracks,
    fetchArtists,
  },
)(withNamespaces('common')(Explore));
