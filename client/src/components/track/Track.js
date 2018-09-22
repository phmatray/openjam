import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../redux/modules/track';
import Spinner from '../common/Spinner';
import ArtistNameLinks from '../../elements/ArtistNameLinks';

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
          <Header as="h2">
            <ArtistNameLinks track={track} />
          </Header>
          <Header as="h3">{track.album.name}</Header>
          <Image src={track.coverurl.w400} alt={track.title} />
        </React.Fragment>
      );
    }

    return <Segment basic>{trackContent}</Segment>;
  }
}

Track.propTypes = {
  fetchTrack: PropTypes.func.isRequired,
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    coverurl: PropTypes.shape({
      w400: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  track: state.track,
});

export default connect(
  mapStateToProps,
  { fetchTrack },
)(Track);
