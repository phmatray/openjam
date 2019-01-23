// @flow

import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { playTrack, pause } from 'store/modules/ui/player';

import withPlayer from 'views/hocs/withPlayer';
import type { TrackBasic } from 'lib/types';

import Presenter from './Track.presenter';

type Props = {
  playTrack: () => void,
  pause: () => void,
  playerPlaying: boolean,
  playerCollectionId: string,
  track: TrackBasic,
};

class TrackItem extends PureComponent<Props> {
  isNew = (track: TrackBasic) => {
    const startDate = moment().subtract(21, 'days');
    const trackDate = moment(track.date);
    const isNew = trackDate > startDate;
    return isNew;
  };

  generateProps = () => ({
    ...this.props,
    ...this.state,
    isNew: this.isNew,
    isActive: this.props.track._id === this.props.playerCollectionId,
  });

  render() {
    const props = this.generateProps();
    return <Presenter {...props} />;
  }
}

export default withPlayer(
  connect(
    null,
    { playTrack, pause },
  )(TrackItem),
);
