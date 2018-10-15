import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';

class LikeButton extends Component {
  render() {
    const { likeAction, unlikeAction, likes, active } = this.props;

    return (
      <Button
        basic={!active}
        compact
        toggle
        animated
        active={active}
        color="red"
        size="mini"
        onClick={active ? unlikeAction : likeAction}
      >
        <Button.Content hidden>Like</Button.Content>
        <Button.Content visible>
          <Icon name="heart" /> {likes}
        </Button.Content>
      </Button>
    );
  }
}

LikeButton.propTypes = {
  likeAction: PropTypes.func.isRequired,
  unlikeAction: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

export default LikeButton;
