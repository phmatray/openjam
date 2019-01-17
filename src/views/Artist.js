// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { fetchArtist, getArtist, getArtistLoading } from '../reducers/ui/views/artist';
import Spinner from '../components/Spinner';

import ArtistPresenter from './artist/ArtistPresenter';

type Props = {
  fetchArtist: () => void,
  artist?: {},
  loading?: boolean,
  match: { params: { id: string } },
};

type State = {
  artistId: string,
};

class Artist extends PureComponent<Props, State> {
  state = {
    artistId: '',
  };

  static defaultProps = {
    artist: null,
    loading: false,
  };

  componentDidMount() {
    this.setState({ artistId: this.props.match.params.id }, () =>
      this.props.fetchArtist(this.state.artistId),
    );
  }

  componentWillReceiveProps(newProps) {
    const { params } = newProps.match;

    if (params.id !== this.state.artistId) {
      this.setState({ artistId: params.id }, () => this.props.fetchArtist(this.state.artistId));
    }
  }

  render() {
    const { artist, loading } = this.props;

    return artist === null || artist === undefined || loading ? (
      <Spinner />
    ) : (
      <ArtistPresenter artist={artist} loading={loading} />
    );
  }
}

const mapStateToProps = state => ({
  artist: getArtist(state),
  loading: getArtistLoading(state),
});

export default connect(
  mapStateToProps,
  { fetchArtist },
)(Artist);
