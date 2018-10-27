import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, GridRow, GridColumn, Button } from 'semantic-ui-react';
import PlaylistTracks from '../../components/PlaylistTracks';
import PlaylistCover from '../../elements/UI/PlaylistCover';
import Body from '../../elements/UI/Body';

const PlaylistPresenter = ({ playlist, collection, playing, playSelected, pause }) => (
  <Body breadcrumbSegments={[<Link to="/playlists">Playlists</Link>, playlist.name]}>
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
  pause: PropTypes.func.isRequired,
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  playing: PropTypes.bool.isRequired,
};

export default PlaylistPresenter;
