import React from 'react';
import { shallow } from 'enzyme';
import Label from '../Label';

describe('<Label />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Label />);
    expect(wrapper.length).toEqual(1);
  });
});
