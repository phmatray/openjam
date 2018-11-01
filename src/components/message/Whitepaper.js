import React from 'react';
import { Message, Button } from 'semantic-ui-react';

const Whitepaper = () => (
  <Message info>
    <Message.Header>Download our whitepaper</Message.Header>
    <p>Want to learn more about the OpenJam project ?</p>
    <Button href="http://bit.ly/OpenJam-WP" color="teal">
      Download
    </Button>
  </Message>
);

export default Whitepaper;
