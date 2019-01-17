// @flow

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Menu, Button } from 'semantic-ui-react';

import withTheme from '../../../hocs/withTheme';

type Props = {
  artist: {
    followers: { total: number },
    fans: { total: number },
  },
  theme: any,
};

const ActionsMenu = ({ artist, theme }: Props) => (
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
);

export default withTheme(ActionsMenu);
