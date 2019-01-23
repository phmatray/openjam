import React from 'react';
import { shallow } from 'enzyme';
import Playlist from './Playlist.container';

describe('<Playlist />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Playlist />);
    expect(wrapper.length).toEqual(1);
  });
});
