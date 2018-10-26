import React from 'react';
import { Link } from 'react-router-dom';
import { Message, Button } from 'semantic-ui-react';

const JoinUs = () => {
  return (
    <Message info>
      <Message.Header>Join us now</Message.Header>
      <p>Sign up to share your songs with your community.</p>
      <Button as={Link} to="/login" color="teal">
        Login
      </Button>{' '}
      <Button as={Link} to="/register" color="teal">
        Register
      </Button>
    </Message>
  );
};

export default JoinUs;
