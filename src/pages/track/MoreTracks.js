import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import Track from '../../components/model/Track';
import LinkEntity from '../../components/LinkEntity';
import {
  fetchTracksByArtistId,
  getByArtist,
  getByArtistLoading,
} from '../../redux/modules/page-track';

class MoreTracks extends Component {
  async componentDidMount() {
    const { artist, limit } = this.props;
    await this.props.fetchTracksByArtistId(artist._id, limit);
  }

  render() {
    const { artist, byArtist } = this.props;

    return (
      <React.Fragment>
        <Header as="h3">
          More tracks from
          <br />
          <LinkEntity entity={artist} as="table" strong />
        </Header>
        {byArtist.map(_ => (
          <Track track={_} key={_._id} />
        ))}
      </React.Fragment>
    );
  }
}

MoreTracks.propTypes = {
  artist: PropTypes.object.isRequired,
  byArtist: PropTypes.array,
  limit: PropTypes.number,
};

MoreTracks.defaultProps = {
  byArtist: [],
  limit: 3,
};

const mapStateToProps = state => ({
  byArtist: getByArtist(state),
  byArtistLoading: getByArtistLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchTracksByArtistId },
)(MoreTracks);
