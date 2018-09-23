import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTracks } from '../../redux/modules/track';
import { Segment, Header } from 'semantic-ui-react';
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

        {tracks !== null && <TrackItems tracks={tracks} loading={loading} />}
      </Segment>
    );
  }
}

Tracks.propTypes = {
  tracks: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  tracks: state.track.tracks,
  loading: state.track.loading,
});

export default connect(
  mapStateToProps,
  { fetchTracks },
)(Tracks);
