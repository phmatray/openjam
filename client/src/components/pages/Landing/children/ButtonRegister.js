import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const ButtonRegister = () => (
  <Button
    as={Link}
    to="/register"
    color="teal"
    size="massive"
    fluid="fluid"
    content="Register"
    style={{ fontFamily: 'Ubuntu' }}
  />
);

export default ButtonRegister;
