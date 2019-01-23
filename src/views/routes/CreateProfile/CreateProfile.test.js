import React from 'react';
import { shallow } from 'enzyme';
import CreateProfile from './CreateProfile.container';

describe('<CreateProfile />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CreateProfile />);
    expect(wrapper.length).toEqual(1);
  });
});
