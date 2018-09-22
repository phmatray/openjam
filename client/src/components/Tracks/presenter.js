import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import TrackItem from './children/TrackItem';
import { Container, Grid, Item } from 'semantic-ui-react';

const TrackItems = ({ tracks, loading }) =>
  tracks === null || loading ? (
    <Spinner />
  ) : tracks.length > 0 ? (
    <Grid columns={5}>
      <Grid.Row>
        {tracks.map(track => (
          <Grid.Column key={track._id}>
            <TrackItem track={track} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  ) : (
    <h4>No tracks found...</h4>
  );

TrackItems.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default TrackItems;
