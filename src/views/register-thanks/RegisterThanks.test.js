import React from 'react';
import { shallow } from 'enzyme';
import RegisterThanks from '../RegisterThanks';

describe('<RegisterThanks />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RegisterThanks />);
    expect(wrapper.length).toEqual(1);
  });
});
