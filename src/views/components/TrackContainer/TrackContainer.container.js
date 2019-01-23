// @flow

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TrackItem from 'views/components/TrackItem';
import { playSelected, actions } from 'store/modules/ui/player';
import withPlayer from 'views/hocs/withPlayer';
import type { TrackBasic } from 'lib/types';

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
