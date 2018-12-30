import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';

const PlayButton = () => (
  <ThemeConsumer>
    {theme => (
      <Button
        compact
        animated
        color={theme.primarySemantic}
        size="mini"
        onClick={console.warn('play')}
      >
        <Button.Content hidden>Play</Button.Content>
        <Button.Content visible>
          <Icon name="play" />
          {' 1.5k'}
        </Button.Content>
      </Button>
    )}
  </ThemeConsumer>
);

export default PlayButton;
