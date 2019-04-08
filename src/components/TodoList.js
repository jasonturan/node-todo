import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, visibilityFilter}) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} />
    ))}
  </ul>
);
export default TodoList;
