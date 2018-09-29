import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Body from '../../elements/UI/Body';
import TableTracks from './children/TableTracks';
import { Grid } from 'semantic-ui-react';
import PlaylistCover from '../../elements/UI/PlaylistCover';

const PlaylistPresenter = ({ playlist }) => (
  <Body breadcrumbSegments={[<Link to="/playlists">Playlists</Link>, playlist.name]}>
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={6} computer={5}>
          <PlaylistCover tracks={playlist.tracks} />
          <p style={{ marginTop: '1em' }}>{playlist.description}</p>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={10} computer={11}>
          <TableTracks tracks={playlist.tracks} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Body>
);

PlaylistPresenter.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlaylistPresenter;
