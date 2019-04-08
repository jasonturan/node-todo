import React from 'react';
import {Dispatch} from '../CoreStore.js';
import {addTodo, setCreateTodoText} from '../actions';

const AddTodo = ({createTodo}) => (
  <div>
    <input
      value={createTodo.text}
      onChange={event => Dispatch(setCreateTodoText(event.target.value))}
    />
    <button type="submit" onClick={() => Dispatch(addTodo(createTodo))}>
      Add Todo
    </button>
  </div>
);
export default AddTodo;
