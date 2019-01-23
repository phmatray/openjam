// @flow

import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

type Props = {
  likeAction: () => void,
  unlikeAction: () => void,
  likes: number,
  active?: boolean,
};

const LikeButton = ({ likeAction, unlikeAction, likes, active }: Props) => (
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
      <Icon name="heart" />
      {` ${likes}`}
    </Button.Content>
  </Button>
);

LikeButton.defaultProps = {
  active: false,
};

export default LikeButton;
