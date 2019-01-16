import React from 'react';
import { shallow } from 'enzyme';
import Album from '../Album';

describe('<Album />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Album />);
    expect(wrapper.length).toEqual(1);
  });
});
