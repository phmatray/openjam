import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTracks } from '../../redux/modules/track';
import { Segment, Header, Card } from 'semantic-ui-react';
import TrackItems from './presenter';

class Tracks extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { tracks, loading } = this.props;

    return (
      <Segment basic>
        <Header as="h1">
          Tracks
          <Header.Subheader>Pick some music by title, artist, remix or label.</Header.Subheader>
        </Header>

        {tracks !== null && (
          <Card.Group itemsPerRow={3}>
            <TrackItems tracks={tracks} loading={loading} />
          </Card.Group>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.track.tracks,
  loading: state.track.loading,
});

export default connect(
  mapStateToProps,
  { fetchTracks },
)(Tracks);