import React from 'react';
import { shallow } from 'enzyme';
import Track from './Track.container';

describe('<Track />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Track />);
    expect(wrapper.length).toEqual(1);
  });
});
