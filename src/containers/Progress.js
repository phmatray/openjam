// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePosition } from '../actions/ui/player';
import ProgressStyled from '../components/player/player-presenter/ProgressStyled';
import ProgressInner from '../components/player/player-presenter/ProgressInner';

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

  render() {
    const { position, duration } = this.props;

    let value = 0;
    if (position && duration) {
      value = (position / duration) * 100 || 0;
    }

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    return (
      <ProgressStyled onClick={this.handleSeekTrack}>
        <ProgressInner value={value} />
      </ProgressStyled>
    );
  }
}

export default connect(
  null,
  { updatePosition },
)(Progress);
