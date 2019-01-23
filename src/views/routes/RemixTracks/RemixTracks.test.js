import React from 'react';
import { shallow } from 'enzyme';
import RemixTracks from './RemixTracks.container';

describe('<RemixTracks />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RemixTracks />);
    expect(wrapper.length).toEqual(1);
  });
});
