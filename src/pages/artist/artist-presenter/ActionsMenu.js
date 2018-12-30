import React from 'react';
import { ThemeConsumer } from 'styled-components';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Container, Menu, Button } from 'semantic-ui-react';

const ActionsMenu = ({ artist }) => (
  <ThemeConsumer>
    {theme => (
      <Container style={{ height: '48px' }}>
        <Menu secondary>
          <Menu.Item style={{ paddingLeft: 0 }}>
            <ReactMarkdown
              source={`**${artist.followers.total}** following`}
              renderers={{ Paragraph: 'span' }}
            />
          </Menu.Item>
          <Menu.Item>
            <ReactMarkdown source={`**${artist.fans.total}** likes`} />
          </Menu.Item>
          <Menu.Item position="right" fitted="horizontally">
            <Button color={theme.primarySemantic}>Follow</Button>
          </Menu.Item>
        </Menu>
      </Container>
    )}
  </ThemeConsumer>
);

ActionsMenu.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ActionsMenu;
