import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Grid, Divider } from 'semantic-ui-react';

import Hero from '../../components/Hero';
import PlaylistTracks from '../../components/PlaylistTracks';
import PlaylistCover from '../../components/PlaylistCover';
import Body from '../../components/Body';

const PlaylistPresenter = ({ playlist, t }) => (
  <React.Fragment>
    <Hero entity={playlist} />
    <Divider style={{ marginTop: 0 }} />
    <Container>
      <Grid divided stackable reversed="mobile">
        <Grid.Column mobile={8} tablet={6} computer={5}>
          <Grid columns={2} doubling>
            <Grid.Column width={16} only="tablet computer">
              <PlaylistCover tracks={playlist.tracks} />
              <p style={{ marginTop: '1em' }}>{playlist.description}</p>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={11}>
          <Body
            breadcrumbSegments={[
              <Link to="/playlists">{t('pages.playlists.header')}</Link>,
              playlist.name,
            ]}
          >
            <PlaylistTracks playlist={playlist} />
          </Body>
        </Grid.Column>
      </Grid>
    </Container>
  </React.Fragment>
);

PlaylistPresenter.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default withNamespaces('common')(PlaylistPresenter);
