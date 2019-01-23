import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist.container';

describe('<Artist />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Artist />);
    expect(wrapper.length).toEqual(1);
  });
});
