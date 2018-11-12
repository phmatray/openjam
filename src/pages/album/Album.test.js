import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Album from '../Album';

import store from '../../redux/store';
import I18nWrapper from '../../components/I18nWrapper';
import ThemeWrapper from '../../components/app/ThemeWrapper';

const album = {
  _id: '5ba65b4af01f4b08931993d5',
  tracks: [
    {
      _id: '5ba1026d2c0d2b2bb277a6bf',
      title: 'Falling',
      edit: 'Mynox Remix',
      label: 'Art Vibes Music',
      audiourl:
        'https://s3.eu-west-3.amazonaws.com/openjamaudio/D1rty+Kickz+-+Falling+(Mynox+Remix)+%5BArt+Vibes+Music%5D.mp3',
      coverurl: {
        w200:
          'https://s3.eu-west-3.amazonaws.com/openjamcover/200w/Art+Vibes+Music+-+EP+-+Falling_200w.jpg',
        w400:
          'https://s3.eu-west-3.amazonaws.com/openjamcover/400w/Art+Vibes+Music+-+EP+-+Falling_400w.jpg',
        w800:
          'https://s3.eu-west-3.amazonaws.com/openjamcover/800w/Art+Vibes+Music+-+EP+-+Falling_800w.jpg',
      },
      artists: [{ _id: '5ba64a899c1fdeb5b063165f', name: 'D1rty Kickz', type: 'artist' }],
      date: '2018-09-18T13:44:53.247Z',
      track_number: 2,
      type: 'track',
      explicit: false,
      disc_number: 1,
      popularity: 0,
    },
    {
      _id: '5ba1027c2c0d2b2bb277a6c0',
      title: 'Falling',
      label: 'Art Vibes Music',
      audiourl:
        'https://s3.eu-west-3.amazonaws.com/openjamaudio/D1rty+Kickz+-+Falling+%5BArt+Vibes+Music%5D.mp3',
      coverurl: {
        w200:
          'https://s3.eu-west-3.amazonaws.com/openjamcover/200w/Art+Vibes+Music+-+EP+-+Falling_200w.jpg',
        w400:
          'https://s3.eu-west-3.amazonaws.com/openjamcover/400w/Art+Vibes+Music+-+EP+-+Falling_400w.jpg',
        w800:
          'https://s3.eu-west-3.amazonaws.com/openjamcover/800w/Art+Vibes+Music+-+EP+-+Falling_800w.jpg',
      },
      artists: [{ _id: '5ba64a899c1fdeb5b063165f', name: 'D1rty Kickz', type: 'artist' }],
      date: '2018-09-18T13:44:53.247Z',
      track_number: 1,
      type: 'track',
      explicit: false,
      disc_number: 1,
      popularity: 0,
    },
  ],
  name: 'Falling',
  label: { _id: '5ba65421f10853089344acaf', name: 'Art Vibes Music', type: 'label' },
  type: 'album',
  images: [
    {
      width: 200,
      height: 200,
      href:
        'https://s3.eu-west-3.amazonaws.com/openjamcover/200w/Art+Vibes+Music+-+EP+-+Falling_200w.jpg',
    },
    {
      width: 400,
      height: 400,
      href:
        'https://s3.eu-west-3.amazonaws.com/openjamcover/400w/Art+Vibes+Music+-+EP+-+Falling_400w.jpg',
    },
    {
      width: 800,
      height: 800,
      href:
        'https://s3.eu-west-3.amazonaws.com/openjamcover/800w/Art+Vibes+Music+-+EP+-+Falling_800w.jpg',
    },
  ],
  release_date: '2015-07-23T00:00:00.000Z',
  release_date_precision: 'day',
  popularity: 0,
  album_type: 'EP',
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <I18nWrapper>
      <Router>
        <Provider store={store}>
          <ThemeWrapper>{/*<Album entity={album} /> */}</ThemeWrapper>
        </Provider>
      </Router>
      <Router>
        <span>Fix this</span>
      </Router>
    </I18nWrapper>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
