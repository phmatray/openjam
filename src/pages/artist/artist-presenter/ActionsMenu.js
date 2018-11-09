import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Container, Menu, Button } from 'semantic-ui-react';

const ActionsMenu = ({ artist }) => (
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
        <Button color="teal">Follow</Button>
      </Menu.Item>
    </Menu>
  </Container>
);

ActionsMenu.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ActionsMenu;
