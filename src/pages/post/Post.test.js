import React from 'react';
import { shallow } from 'enzyme';
import Post from '../Post';

describe('<Post />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Post />);
    expect(wrapper.length).toEqual(1);
  });
});
