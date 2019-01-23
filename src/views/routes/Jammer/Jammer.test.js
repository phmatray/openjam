import React from 'react';
import { shallow } from 'enzyme';
import Jammer from './Jammer.container';

describe('<Jammer />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Jammer />);
    expect(wrapper.length).toEqual(1);
  });
});
