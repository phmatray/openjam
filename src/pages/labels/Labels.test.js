import React from 'react';
import { shallow } from 'enzyme';
import Labels from '../Labels';

describe('<Labels />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Labels />);
    expect(wrapper.length).toEqual(1);
  });
});
