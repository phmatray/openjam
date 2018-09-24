import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTracks } from '../../redux/modules/track';
import TrackItems from './presenter';
import Body from '../../elements/UI/Body';
import H2 from '../../elements/Titles/H2';

class Tracks extends Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { tracks, loading } = this.props;

    return (
      <Body breadcrumbSegments={['Tracks']} description="Pick some music by track.">
        <H2 header="What's new" />
        {tracks !== null && <TrackItems tracks={tracks} loading={loading} />}
      </Body>
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
