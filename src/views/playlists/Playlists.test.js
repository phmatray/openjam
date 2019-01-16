import React from 'react';
import { shallow } from 'enzyme';
import Playlists from '../Playlists';

describe('<Playlists />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Playlists />);
    expect(wrapper.length).toEqual(1);
  });
});
