import React from 'react';
import { shallow } from 'enzyme';
import ActivateAccount from '../ActivateAccount';

describe('<ActivateAccount />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ActivateAccount />);
    expect(wrapper.length).toEqual(1);
  });
});
