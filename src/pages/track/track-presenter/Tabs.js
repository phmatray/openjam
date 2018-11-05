import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Header, Tab } from 'semantic-ui-react';

import About from './tabs/About';

const Tabs = ({ track }) => {
  const { description, lyrics } = track.meta;

  const descriptionPane = {
    menuItem: 'Description',
    render: () => (
      <Tab.Pane attached>
        <Header as="h2">Description</Header>
        <ReactMarkdown source={description || 'There is no description for this title'} />
      </Tab.Pane>
    ),
  };

  const aboutPane = {
    menuItem: 'About',
    render: () => (
      <Tab.Pane attached>
        <About track={track} />
      </Tab.Pane>
    ),
  };

  const panes = [descriptionPane, aboutPane];

  if (lyrics) {
    const lyricsPane = {
      menuItem: 'Lyrics',
      render: () => (
        <Tab.Pane attached>
          <Header as="h2">Lyrics</Header>
          <ReactMarkdown source={lyrics} />
        </Tab.Pane>
      ),
    };
    panes.push(lyricsPane);
  }

  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};

Tabs.propTypes = {
  track: PropTypes.shape({
    meta: PropTypes.shape({
      lyrics: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Tabs;
