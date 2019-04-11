import React from 'react';
import {Dispatch} from '../CoreStore.js';
import {addTodo, setCreateTodoText} from '../actions';
import {Form, Button} from 'react-bootstrap';
import {map} from 'ramda';

const TodoForm = ({todoForm}) => (
  <Form className="todoForm">
    <Form.Group>
      <Form.Label>Todo</Form.Label>
      <Form.Control
        type="input"
        value={todoForm.text}
        onChange={event => Dispatch(setCreateTodoText(event.target.value))}
        placeholder="Todo"
      />
    </Form.Group>
    <Form.Group>
      {map(
        m => (
          <span key={m} className="is-invalid">
            {m}
          </span>
        ),
        todoForm.validationMessages
      )}
    </Form.Group>
    <Button
      variant="primary"
      type="button"
      onClick={() => Dispatch(addTodo(todoForm))}
    >
      Create
    </Button>
  </Form>
);
export default TodoForm;
