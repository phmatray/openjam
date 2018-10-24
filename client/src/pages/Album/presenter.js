import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';
import Moment from 'react-moment';
import AlbumTracks from './children/AlbumTracks';
import AlbumCover from '../../elements/UI/AlbumCover';
import Body from '../../elements/UI/Body';

const AlbumPresenter = ({ album }) => {
  const albumName = album.album_type === 'EP' ? `${album.name} - EP` : album.name;

  const description = (
    <span>
      Release date: <Moment format="LL">{album.release_date}</Moment>
    </span>
  );

  return (
    <Body
      breadcrumbSegments={[<Link to="/albums">Albums</Link>, albumName]}
      description={description}
    >
      <Grid>
        <GridRow>
          <GridColumn mobile={16} tablet={6} computer={5}>
            <AlbumCover album={album} />
          </GridColumn>
          <GridColumn mobile={16} tablet={10} computer={11}>
            <AlbumTracks tracks={album.tracks} />
          </GridColumn>
        </GridRow>
      </Grid>
    </Body>
  );
};

AlbumPresenter.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    tracks: PropTypes.array.isRequired,
  }).isRequired,
};

export default AlbumPresenter;
