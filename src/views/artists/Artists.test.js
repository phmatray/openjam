import React from 'react';
import { shallow } from 'enzyme';
import Artists from '../Artists';

describe('<Artists />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Artists />);
    expect(wrapper.length).toEqual(1);
  });
});
