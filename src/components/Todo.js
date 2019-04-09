import React from 'react';
import {Dispatch} from '../CoreStore.js';
import {toggleTodo} from '../actions';

const Todo = ({todo}) => (
  <li
    key={todo.id}
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}
    onClick={() => {
      Dispatch(toggleTodo(todo));
    }}
  >
    {todo.text}
  </li>
);
export default Todo;
