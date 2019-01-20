// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TrackItem from '../components/TrackItem';
import { playSelected, actions } from '../reducers/ui/player';
import withPlayer from '../hocs/withPlayer';
import type { TrackBasic } from '../types';

type Props = {
  playSelected: (track: TrackBasic) => void,
  pause: () => void,
  playerPlaying: boolean,
  playerTrack: TrackBasic,
};

class TrackContainer extends PureComponent<Props> {
  handleShareClick = (trackId: string) => {
    console.log(`Shared: ${trackId}`);
  };

  handleLikeClick = (trackId: string) => {
    console.log(`Liked: ${trackId}`);
  };

  generateProps = () => ({
    ...this.props,
    ...this.state,
    onShareClick: this.handleShareClick,
    onLikeClick: this.handleLikeClick,
  });

  render() {
    const props = this.generateProps();
    return <TrackItem {...props} />;
  }
}

export default withPlayer(
  connect(
    null,
    { playSelected, pause: actions.pause },
  )(TrackContainer),
);
