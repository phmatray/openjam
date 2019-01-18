// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import Track from '../../containers/Track';
import LinkEntity from '../../components/LinkEntity';
import {
  fetchTracksByArtistId,
  getByArtist,
  getByArtistLoading,
} from '../../reducers/ui/views/track';

type Props = {
  fetchTracksByArtistId: (artistId: string, limit: number) => void,
  artist: { _id: string },
  byArtist?: { _id: string }[],
  limit?: number,
};

class MoreTracks extends PureComponent<Props> {
  static defaultProps = {
    byArtist: [],
    limit: 3,
  };

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

const mapStateToProps = state => ({
  byArtist: getByArtist(state),
  byArtistLoading: getByArtistLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchTracksByArtistId },
)(MoreTracks);
