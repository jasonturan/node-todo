import React from 'react';
import Todo from './Todo';
import {shallow} from 'enzyme';
import {Dispatch} from '../CoreStore.js';
import {head} from 'ramda';
import {ActionTypes} from '../actions';
import {createTodo} from '../structFactories';
import {getDispatchedEventsByName} from '../testHelpers.js';
const {expect} = global;

it('renders without crashing', () => {
  shallow(<Todo todo={createTodo('')} />);
});

it('contains a list item', () => {
  const wrapper = shallow(<Todo todo={createTodo('')} />);
  expect(wrapper.find('input')).toHaveLength(1);
});

it('dispatches a toggle todo event when clicked', () => {
  const wrapper = shallow(<Todo todo={createTodo(0)} />);
  wrapper.simulate('click');
  expect(Dispatch).toHaveBeenCalledTimes(1);
  const expectedEvents = getDispatchedEventsByName(ActionTypes.TOGGLE_TODO);
  expect(expectedEvents).not.toBeNull();
  expect(head(expectedEvents).todo.completed).toEqual(false);
});
