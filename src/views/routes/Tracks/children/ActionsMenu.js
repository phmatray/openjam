// @flow

import React from 'react';
import { Container, Menu, Icon, Button, Input } from 'semantic-ui-react';
import withTheme from 'views/hocs/withTheme';

const ActionsMenu = ({ theme }) => (
  <Container style={{ height: '48px' }}>
    <Menu>
      <Menu.Item>
        <Button color={theme.primarySemantic}>Play</Button>
      </Menu.Item>

      <Menu.Item position="right">
        <Input icon="search" placeholder="Search..." />
      </Menu.Item>

      <Menu.Item>
        <Icon name="filter" />
      </Menu.Item>
    </Menu>
    {/* TODO: Add more actions */}
  </Container>
);

ActionsMenu.propTypes = {};

export default withTheme(ActionsMenu);
