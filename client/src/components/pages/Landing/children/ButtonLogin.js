import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const ButtonLogin = () => (
  <Button
    as={Link}
    to="/login"
    size="massive"
    fluid="fluid"
    content="Sign in"
    style={{ fontFamily: 'Ubuntu' }}
  />
);

export default ButtonLogin;
