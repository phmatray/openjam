import React from 'react';
import { Message, Button } from 'semantic-ui-react';

import withTheme from '../../hocs/withTheme';

const Whitepaper = ({ theme }) => (
  <Message info>
    <Message.Header>Download our whitepaper</Message.Header>
    <p>Want to learn more about the OpenJam project ?</p>
    <Button href="http://bit.ly/OpenJam-WP" color={theme.primarySemantic}>
      Download
    </Button>
  </Message>
);

export default withTheme(Whitepaper);
