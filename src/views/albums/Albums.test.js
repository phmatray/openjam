import React from 'react';
import { shallow } from 'enzyme';
import Albums from '../Albums';

describe('<Albums />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Albums />);
    expect(wrapper.length).toEqual(1);
  });
});
