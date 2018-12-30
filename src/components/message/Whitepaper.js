import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { Message, Button } from 'semantic-ui-react';

const Whitepaper = () => (
  <ThemeConsumer>
    {theme => (
      <Message info>
        <Message.Header>Download our whitepaper</Message.Header>
        <p>Want to learn more about the OpenJam project ?</p>
        <Button href="http://bit.ly/OpenJam-WP" color={theme.primarySemantic}>
          Download
        </Button>
      </Message>
    )}
  </ThemeConsumer>
);

export default Whitepaper;
