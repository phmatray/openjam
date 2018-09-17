import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Player from './presenter';
import { Cover, ColumnInfo, TrackName, ArtistName } from './style';
import '../../index.css';
import 'semantic-ui-css/semantic.min.css';
import 'rc-slider/assets/index.css';

const current = {
  _id: '5b9236dbfb6fc0289619f97d',
  title: 'Feel the Breeze (Kerri Chandler Dub)',
  artist: 'Dee Dee Brave',
  coverurl: 'https://i.ytimg.com/vi/Gcm_JQkIs9E/maxresdefault.jpg',
};

storiesOf('Player', module)
  .addDecorator(story => <Router>{story()}</Router>)

  .add('player', () => (
    <Player
      current={current}
      play={action('play')}
      pause={action('pause')}
      previous={action('previous')}
      next={action('next')}
    />
  ))

  .add('cover', () => <Cover src={current.coverurl} />);
