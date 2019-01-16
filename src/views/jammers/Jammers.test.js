import React from 'react';
import { shallow } from 'enzyme';
import Jammers from '../Jammers';

describe('<Jammers />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Jammers />);
    expect(wrapper.length).toEqual(1);
  });
});
