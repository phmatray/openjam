import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

describe('<Search />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.length).toEqual(1);
  });
});
