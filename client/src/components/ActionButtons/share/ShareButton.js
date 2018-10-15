import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';

class ShareButton extends Component {
  render() {
    const { shares } = this.props;

    return (
      <Button basic compact animated size="mini" onClick={this.handleClick}>
        <Button.Content hidden>Share</Button.Content>
        <Button.Content visible>
          <Icon name="share" /> {shares}
        </Button.Content>
      </Button>
    );
  }
}

ShareButton.propTypes = {
  shares: PropTypes.number.isRequired,
};

export default ShareButton;
