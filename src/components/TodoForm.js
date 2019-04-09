import React from 'react';
import {Dispatch} from '../CoreStore.js';
import {addTodo, setCreateTodoText} from '../actions';

const TodoForm = ({todoForm}) => (
  <div>
    <input
      value={todoForm.text}
      onChange={event => Dispatch(setCreateTodoText(event.target.value))}
    />
    <button type="submit" onClick={() => Dispatch(addTodo(todoForm))}>
      Add Todo
    </button>
  </div>
);
export default TodoForm;
