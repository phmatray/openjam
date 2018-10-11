import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import PlaylistTracks from './children/PlaylistTracks';
import PlaylistCover from '../../../elements/UI/PlaylistCover';
import Body from '../../../elements/UI/Body';

const PlaylistPresenter = ({ playlist }) => (
  <Body breadcrumbSegments={[<Link to="/playlists">Playlists</Link>, playlist.name]}>
    <Grid>
      <GridRow>
        <GridColumn mobile={16} tablet={6} computer={5}>
          <PlaylistCover tracks={playlist.tracks} />
          <p style={{ marginTop: '1em' }}>{playlist.description}</p>
        </GridColumn>
        <GridColumn mobile={16} tablet={10} computer={11}>
          <PlaylistTracks tracks={playlist.tracks} />
        </GridColumn>
      </GridRow>
    </Grid>
  </Body>
);

PlaylistPresenter.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaylistPresenter;
