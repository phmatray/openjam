import React from 'react';
import { shallow } from 'enzyme';
import ActivateAccountSuccess from './ActivateAccountSuccess.container';

describe('<ActivateAccountSuccess />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ActivateAccountSuccess />);
    expect(wrapper.length).toEqual(1);
  });
});
