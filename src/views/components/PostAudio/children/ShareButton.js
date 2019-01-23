// @flow

import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';

type Props = {
  shares: number,
};

class ShareButton extends Component<Props> {
  render() {
    const { shares } = this.props;

    return (
      <Button basic compact animated size="mini" onClick={this.handleClick}>
        <Button.Content hidden>Share</Button.Content>
        <Button.Content visible>
          <Icon name="share" />
          {` ${shares}`}
        </Button.Content>
      </Button>
    );
  }
}

export default ShareButton;
