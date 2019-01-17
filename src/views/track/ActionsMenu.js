// @flow

import React from 'react';
import { Container, Menu, Icon, Button } from 'semantic-ui-react';

import withTheme from '../../hocs/withTheme';

type Props = {
  track: {
    type2: string,
    audiourl: string,
    meta: {
      downloadable: boolean,
      downloads: [],
    },
  },
  theme: any,
};

const ActionsMenu = ({ track, theme }: Props) => (
  <Container style={{ height: '48px' }}>
    <Menu secondary>
      {/* <Menu.Item>
            <Icon name="play" />
            {` ${track.meta.played.length}`}
          </Menu.Item>
          <Menu.Item>
            <Icon name="heart" />
            {` ${track.meta.likes.length}`}
          </Menu.Item> */}

      {track.meta.downloadable && (
        <Menu.Item>
          <Icon name="arrow down" />
          {` ${track.meta.downloads.length}`}
        </Menu.Item>
      )}

      <Menu.Item position="right" fitted="horizontally">
        <Button color={theme.primarySemantic} disabled>
          Repost
        </Button>
      </Menu.Item>

      {track.type2 === 'original' && (
        <Menu.Item fitted="horizontally">
          <Button color={theme.primarySemantic} disabled>
            Download Stems
          </Button>
        </Menu.Item>
      )}

      {track.meta.downloadable && (
        <Menu.Item fitted="horizontally">
          <Button
            color={theme.primarySemantic}
            as="a"
            href={track.audiourl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </Menu.Item>
      )}
    </Menu>
    {/* TODO: Add more actions */}
  </Container>
);

export default withTheme(ActionsMenu);
