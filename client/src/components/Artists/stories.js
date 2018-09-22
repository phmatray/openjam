import '../../index.css';
import 'semantic-ui-css/semantic.min.css';
import 'rc-slider/assets/index.css';
import '../../App.css';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { BrowserRouter as Router, Link } from 'react-router-dom';
import TrackItem from './children/TrackItem';

const track = {
  meta: {
    tags: [],
    instruments: [],
    likes: [],
    jamcoins: [],
    shares: [],
  },
  artists: ['Pandhora'],
  date: '2018-09-18T13:44:53.247Z',
  _id: '5ba103e72c0d2b2bb277a6df',
  title: 'Oghab',
  label: 'Art Vibes Music',
  edit: 'Alke Mist Remix',
  audiourl:
    'https://s3.eu-west-3.amazonaws.com/openjamaudio/Pandhora+-+Oghab+(Alke+Mist+Remix)+%5BArt+Vibes+Music%5D.mp3',
  coverurl: 'http://placekitten.com/200/200',
  __v: 0,
};

storiesOf('Tracks', module)
  .addDecorator(story => (
    <Router>
      <div style={{ margin: '1em' }}>{story()}</div>
    </Router>
  ))

  .add('track item', () => (
    <div>
      <h1>Color variations</h1>
      <TrackItem track={track} />
      <TrackItem track={track} color="red" />
    </div>
  ));
