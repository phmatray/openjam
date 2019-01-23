// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePosition } from 'store/modules/ui/player';

import ProgressPresenter from './Progress.presenter';

type Props = {
  updatePosition: (position: number) => void,
  position: number,
  duration: number,
};

class Progress extends Component<Props> {
  handleSeekTrack = e => {
    const { updatePosition, duration } = this.props;

    // console.log(`duration: ${duration}`);
    const xPos =
      (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;

    updatePosition(xPos * duration);
  };

  getProgressValue = () => {
    const { position, duration } = this.props;

    let progressValue = 0;
    if (position && duration) {
      progressValue = (position / duration) * 100 || 0;
    }

    if (progressValue < 0) {
      progressValue = 0;
    }

    if (progressValue > 100) {
      progressValue = 100;
    }

    return progressValue;
  };

  render() {
    return <ProgressPresenter onClick={this.handleSeekTrack} value={this.getProgressValue()} />;
  }
}

export default connect(
  null,
  { updatePosition },
)(Progress);
