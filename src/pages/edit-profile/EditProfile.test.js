import React from 'react';
import { shallow } from 'enzyme';
import EditProfile from '../EditProfile';

describe('<EditProfile />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<EditProfile />);
    expect(wrapper.length).toEqual(1);
  });
});
