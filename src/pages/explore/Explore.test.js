import React from 'react';
import { shallow } from 'enzyme';
import Explore from '../Explore';

describe('<Explore />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Explore />);
    expect(wrapper.length).toEqual(1);
  });
});
