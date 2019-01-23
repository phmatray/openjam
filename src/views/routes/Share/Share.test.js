import React from 'react';
import { shallow } from 'enzyme';
import Share from './Share.container';

describe('<Share />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Share />);
    expect(wrapper.length).toEqual(1);
  });
});
