import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';

class PlayButton extends Component {
  render() {
    return (
      <Button compact animated color="teal" size="mini" onClick={this.handleClick}>
        <Button.Content hidden>Play</Button.Content>
        <Button.Content visible>
          <Icon name="play" /> 1.5k
        </Button.Content>
      </Button>
    );
  }
}

export default PlayButton;
