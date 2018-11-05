import React from 'react';
import PropTypes from 'prop-types';
import { Container, Menu, Icon, Button } from 'semantic-ui-react';

const ActionsMenu = ({ track }) => (
  <Container style={{ height: '48px' }}>
    <Menu secondary>
      <Menu.Item>
        <Icon name="play" />
        {` ${track.meta.played.length}`}
      </Menu.Item>
      <Menu.Item>
        <Icon name="heart" />
        {` ${track.meta.likes.length}`}
      </Menu.Item>
      {track.meta.downloadable && (
        <Menu.Item>
          <Icon name="arrow down" />
          {` ${track.meta.downloads.length}`}
        </Menu.Item>
      )}

      <Menu.Item position="right" fitted="horizontally">
        <Button>Repost</Button>
      </Menu.Item>
      {track.meta.downloadable && (
        <Menu.Item fitted="horizontally">
          <Button
            color="teal"
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

ActionsMenu.propTypes = {
  track: PropTypes.shape({
    audiourl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActionsMenu;
