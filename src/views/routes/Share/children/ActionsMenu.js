// @flow

import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

import withTheme from 'views/hocs/withTheme';

const ActionsMenu = ({ theme }) => (
  <Container style={{ height: '48px' }}>
    <Menu>
      <Menu.Item>
        <Button color={theme.primarySemantic}>TODO</Button>
      </Menu.Item>
    </Menu>
    {/* TODO: Add more actions */}
  </Container>
);

ActionsMenu.propTypes = {};

export default withTheme(ActionsMenu);
