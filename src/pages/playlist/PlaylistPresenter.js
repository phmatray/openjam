import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';

import PlaylistTracks from '../../components/PlaylistTracks';
import PlaylistCover from '../../components/PlaylistCover';
import Body from '../../components/Body';

const PlaylistPresenter = ({ playlist, playSelected, t }) => (
  <Body
    breadcrumbSegments={[<Link to="/playlists">{t('pages.playlists.header')}</Link>, playlist.name]}
  >
    <Grid>
      <GridRow>
        <GridColumn mobile={16} tablet={6} computer={5}>
          <PlaylistCover tracks={playlist.tracks} />
          <p style={{ marginTop: '1em' }}>{playlist.description}</p>
          <Button content="Play" color="teal" onClick={() => playSelected(playlist)} />
        </GridColumn>
        <GridColumn mobile={16} tablet={10} computer={11}>
          <PlaylistTracks playlist={playlist} />
        </GridColumn>
      </GridRow>
    </Grid>
  </Body>
);

PlaylistPresenter.propTypes = {
  playSelected: PropTypes.func.isRequired,
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default withNamespaces('common')(PlaylistPresenter);
