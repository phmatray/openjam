// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

const ProfileActions = () => (
  <div>
    <Button as={Link} to="/edit-profile" primary>
      <Icon name="user" />
      Edit Profile
    </Button>
  </div>
);

ProfileActions.propTypes = {};

export default ProfileActions;
