import React from 'react';
import {Dispatch} from '../CoreStore.js';
import {toggleTodo} from '../actions';
import {ListGroup} from 'react-bootstrap';

const Todo = ({todo}) => (
  <ListGroup.Item
    className={'todo'}
    key={todo.id}
    onClick={() => {
      Dispatch(toggleTodo(todo));
    }}
  >
    <input
      className="form-check-input"
      type="checkbox"
      readOnly
      checked={todo.completed ? true : false}
    />
    <label
      className={
        todo.completed
          ? 'form-check-label completed'
          : 'form-check-label active'
      }
    >
      {todo.title}
    </label>
  </ListGroup.Item>
);
export default Todo;
