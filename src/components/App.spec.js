import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import Footer from './Footer.js';

const {expect} = global;

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders a todolist, addtodo, and footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<TodoList />)).toEqual(true);
  expect(wrapper.contains(<TodoForm />)).toEqual(true);
  expect(wrapper.contains(<Footer />)).toEqual(true);
});
