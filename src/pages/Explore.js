import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { Header, Container, Divider } from 'semantic-ui-react';

import Flex from '../components/Flex';
import Hero from '../components/Hero';
import { fetchOriginalTracks, fetchRemixTracks, fetchArtists } from '../redux/modules/page-explore';
import background from '../images/backgrounds/piano-2601498_1920.jpg';

import Section from './explore/Section';

export class Explore extends Component {
  componentDidMount() {
    const { fetchOriginalTracks, fetchRemixTracks, fetchArtists } = this.props;

    fetchOriginalTracks();
    fetchRemixTracks();
    fetchArtists();
  }

  render() {
    const { originalTracks, remixTracks, artists, t } = this.props;

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
          {originalTracks !== null && (
            <Section
              title={t('pages.explore.original-titles')}
              items={originalTracks}
              to="/tracks"
              maxHeight={256}
            />
          )}
          {remixTracks !== null && (
            <Section
              title={t('pages.explore.remix-titles')}
              items={remixTracks.slice(0, 32)}
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
  originalTracks: [],
  remixTracks: [],
  artists: [],
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
