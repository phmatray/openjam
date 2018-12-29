import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';

describe('<NotFound />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.length).toEqual(1);
  });
});
