import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import GhostCharacter from './GhostCharacter';

const NotFound = () => {
  return (
    <Segment basic>
      <Header as="h1">
        Page not found (404)
        <Header.Subheader>Boo, looks like a ghost stole this page!</Header.Subheader>
      </Header>

      <GhostCharacter />
    </Segment>
  );
};

export default NotFound;
