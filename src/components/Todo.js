import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({todo}) => (
  <li
    key={todo.id}
    style={{
      textDecoration: false ? 'line-through' : 'none'
    }}
  >
    {todo.text}
  </li>
);
export default Todo;
