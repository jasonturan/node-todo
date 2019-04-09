import React from 'react';
import Footer from './Footer';
import {shallow} from 'enzyme';
const {expect} = global;
it('renders without crashing', () => {
  shallow(<Footer />);
});
it('contains three link components', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('Link')).toHaveLength(3);
});
