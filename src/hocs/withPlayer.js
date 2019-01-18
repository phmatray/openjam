// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPlaying, getCollectionId, getCurrent } from '../reducers/ui/player';
import type { TrackBasic } from '../types';

type Props = {
  playerPlaying: boolean,
  playerCollectionId: string,
  playerTrack: TrackBasic,
};

const withPlayer = ComposedComponent => {
  class PlayerContainer extends Component<Props> {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    playerPlaying: getPlaying(state),
    playerCollectionId: getCollectionId(state),
    playerTrack: getCurrent(state),
  });

  return connect(mapStateToProps)(PlayerContainer);
};

export default withPlayer;
