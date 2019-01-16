import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { Container, Menu, Button } from 'semantic-ui-react';

const ActionsMenu = () => (
  <ThemeConsumer>
    {theme => (
      <Container style={{ height: '48px' }}>
        <Menu>
          <Menu.Item>
            <Button color={theme.primarySemantic}>TODO</Button>
          </Menu.Item>
        </Menu>
        {/* TODO: Add more actions */}
      </Container>
    )}
  </ThemeConsumer>
);

ActionsMenu.propTypes = {};

export default ActionsMenu;
