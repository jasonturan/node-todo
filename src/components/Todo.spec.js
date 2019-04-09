import React from 'react';
import Todo from './Todo';
import {shallow} from 'enzyme';
import {Dispatch} from '../CoreStore.js';
import {head, pipe, flatten, filter} from 'ramda';
import {VisibilityFilters, ActionTypes} from '../actions';
import {createTodo} from '../structFactories/index'
import {getDispatchedEventsByName} from '../testHelpers.js';
const {expect} = global;


it('renders without crashing', () => {
  shallow(<Todo todo={createTodo(0,'')} />);
});

it('contains a list item', () => {
  const wrapper = shallow(<Todo todo={createTodo(0,'')} />);
  expect(wrapper.find('li')).toHaveLength(1);
});

it('dispatches a toggle todo event when clicked', () => {
  const wrapper = shallow(
    <Todo
      todo={createTodo('foo',0)}
    />
  );
  wrapper.find('li').simulate('click');
  expect(Dispatch).toHaveBeenCalledTimes(1);
  const expectedEvents = getDispatchedEventsByName(ActionTypes.TOGGLE_TODO);
  expect(expectedEvents).not.toBeNull();
  expect(head(expectedEvents).todo.completed).toEqual(false);
});