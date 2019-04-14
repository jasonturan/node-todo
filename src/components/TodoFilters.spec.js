import React from 'react';
import {shallow} from 'enzyme';
import TodoFilters from './TodoFilters.js';

const {expect} = global;

it('renders without crashing', () => {
  shallow(<TodoFilters />);
});

it('contains three todo filters', () => {
  const wrapper = shallow(<TodoFilters />);
  expect(wrapper.find('VisibilityFilter')).toHaveLength(3);
});
