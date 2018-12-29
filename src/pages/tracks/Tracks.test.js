import React from 'react';
import { shallow } from 'enzyme';
import Tracks from '../Tracks';

describe('<Tracks />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Tracks />);
    expect(wrapper.length).toEqual(1);
  });
});
