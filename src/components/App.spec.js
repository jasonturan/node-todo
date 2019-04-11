import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import TodoFilters from './TodoFilters.js';
import {createRootState} from '../structFactories';

const {expect} = global;

const createApp = () => (shallow(<App { root= createRootState()} />));

it('renders without crashing', () => {
  createApp();
});

it('renders a todolist, addtodo, and footer', () => {
  const wrapper = createApp();
  expect(wrapper.contains(<TodoList />)).toEqual(true);
  expect(wrapper.contains(<TodoForm />)).toEqual(true);
  expect(wrapper.contains(<TodoFilters />)).toEqual(true);
});
