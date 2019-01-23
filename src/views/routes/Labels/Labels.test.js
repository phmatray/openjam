import React from 'react';
import { shallow } from 'enzyme';
import Labels from './Labels.container';

describe('<Labels />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Labels />);
    expect(wrapper.length).toEqual(1);
  });
});
