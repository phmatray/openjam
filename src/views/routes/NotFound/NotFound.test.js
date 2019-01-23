import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound.container';

describe('<NotFound />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.length).toEqual(1);
  });
});
