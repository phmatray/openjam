import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../redux/modules/track';
import Spinner from '../common/Spinner';

class Track extends Component {
  state = {
    trackId: null,
  };

  componentWillReceiveProps(newProps) {
    var params = newProps.match.params;

    if (params.id !== this.state.trackId)
      this.setState({ trackId: params.id }, () => this.props.fetchTrack(this.state.trackId));
  }

  componentDidMount() {
    this.setState({ trackId: this.props.match.params.id }, () =>
      this.props.fetchTrack(this.state.trackId),
    );
  }

  render() {
    const { track, loading } = this.props.track;

    let trackContent;

    if (track === null || loading || Object.keys(track).length === 0) {
      trackContent = <Spinner />;
    } else {
      trackContent = (
        <React.Fragment>
          <Header as="h1">{track.title}</Header>
          <Header as="h2">{track.artist}</Header>
          <Image src={track.coverurl} alt={track.title} />
        </React.Fragment>
      );
    }

    return <Segment basic>{trackContent}</Segment>;
  }
}

Track.propTypes = {
  fetchTrack: PropTypes.func.isRequired,
  track: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  track: state.track,
});

export default connect(
  mapStateToProps,
  { fetchTrack },
)(Track);
