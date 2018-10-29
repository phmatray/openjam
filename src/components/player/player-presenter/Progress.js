import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePosition } from '../../../redux/modules/player';
import { ProgressStyled, ProgressInner } from './styles';

class Progress extends Component {
  handleSeekTrack = e => {
    const { updatePosition, duration } = this.props;

    console.log(`duration: ${duration}`);
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

Progress.propTypes = {
  updatePosition: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default connect(
  null,
  { updatePosition },
)(Progress);
