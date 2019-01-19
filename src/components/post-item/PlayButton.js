// @flow

import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

import withTheme from '../../hocs/withTheme';

const PlayButton = ({ theme }) => (
  <Button compact animated color={theme.primarySemantic} size="mini" onClick={console.warn('play')}>
    <Button.Content hidden>Play</Button.Content>
    <Button.Content visible>
      <Icon name="play" />
      {' 1.5k'}
    </Button.Content>
  </Button>
);

export default withTheme(PlayButton);
