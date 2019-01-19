// @flow

import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Header, Tab } from 'semantic-ui-react';

import type { TrackBasic } from '../../types';

import About from './tabs/About';

type Props = {
  track: TrackBasic,
};

const Tabs = ({ track }: Props) => {
  const { description, lyrics } = track.meta;

  const descriptionPane = {
    menuItem: 'Description',
    render: () => (
      <Tab.Pane attached={false}>
        <Header as="h2">Description</Header>
        <ReactMarkdown source={description || 'There is no description for this title'} />
      </Tab.Pane>
    ),
  };

  const aboutPane = {
    menuItem: 'About',
    render: () => (
      <Tab.Pane attached={false}>
        <About track={track} />
      </Tab.Pane>
    ),
  };

  const panes = [descriptionPane, aboutPane];

  if (lyrics) {
    const lyricsPane = {
      menuItem: 'Lyrics',
      render: () => (
        <Tab.Pane attached={false}>
          <Header as="h2">Lyrics</Header>
          <ReactMarkdown source={lyrics} />
        </Tab.Pane>
      ),
    };
    panes.push(lyricsPane);
  }

  return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};

export default Tabs;
