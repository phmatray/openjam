import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

const CommentButton = () => (
  <Button basic compact animated size="mini">
    <Button.Content hidden>Comments</Button.Content>
    <Button.Content visible>
      <Icon name="comments" />
      {` ${12}`}
    </Button.Content>
  </Button>
);

export default CommentButton;
