import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

const PlayButton = () => (
  <Button compact animated color="teal" size="mini" onClick={console.warn('play')}>
    <Button.Content hidden>Play</Button.Content>
    <Button.Content visible>
      <Icon name="play" />
      {' 1.5k'}
    </Button.Content>
  </Button>
);

export default PlayButton;
