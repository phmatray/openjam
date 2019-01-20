// @flow

import * as React from 'react';
import { connect } from 'react-redux';

import { getPlaying, getCurrent } from '../reducers/ui/player';
import type { TrackBasic } from '../types';

type Props = {
  playerPlaying: boolean,
  playerCollectionId: string,
  playerTrack: TrackBasic,
};

const withPlayer = (ComposedComponent: React.AbstractComponent) => {
  class PlayerContainer extends React.Component<Props> {
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    playerPlaying: getPlaying(state),
    playerTrack: getCurrent(state),
  });

  return connect(mapStateToProps)(PlayerContainer);
};

export default withPlayer;
