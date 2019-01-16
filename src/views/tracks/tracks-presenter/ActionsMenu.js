import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { Container, Menu, Icon, Button, Input } from 'semantic-ui-react';

const ActionsMenu = () => (
  <ThemeConsumer>
    {theme => (
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
    )}
  </ThemeConsumer>
);

ActionsMenu.propTypes = {};

export default ActionsMenu;
