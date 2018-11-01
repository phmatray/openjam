import '../../../index.css';
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import { storiesOf } from '@storybook/react';

import { BrowserRouter as Router } from 'react-router-dom';
import Track from '../Track';

const track = {
  meta: {
    tags: [],
    instruments: [],
    likes: [],
    jamcoins: [],
    shares: [],
  },
  type: 'track',
  artists: [{ name: 'Pandhora', type: 'artist' }],
  date: '2018-09-18T13:44:53.247Z',
  _id: '5ba103e72c0d2b2bb277a6df',
  title: 'Oghab',
  label: 'Art Vibes Music',
  edit: 'Alke Mist Remix',
  audiourl:
    'https://s3.eu-west-3.amazonaws.com/openjamaudio/Pandhora+-+Oghab+(Alke+Mist+Remix)+%5BArt+Vibes+Music%5D.mp3',
  coverurl: {
    w200:
      'https://s3.eu-west-3.amazonaws.com/openjamcover/200w/Art+Vibes+Music+-+EP+-+Oghab_200w.jpg',
  },
  __v: 0,
};

storiesOf('Tracks', module)
  .addDecorator(story => (
    <Router>
      <div style={{ margin: '1em' }}>{story()}</div>
    </Router>
  ))

  .add('track item', () => <Track track={track} />);
