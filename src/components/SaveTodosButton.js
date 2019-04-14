import React from 'react';
import {Button} from 'react-bootstrap';
import {CreateOrUpdateTodos} from '../data/todoRepository';
import {toastr} from 'react-redux-toastr';

const performSave = todos => {
  CreateOrUpdateTodos(todos).then(
    () => {
      toastr.success('Todos saved');
    },
    (error) => {
      debugger;
      toastr.error('Unexpected Error when attempting to save ');
    }
  );
};

const SaveTodosButton = ({todos}) => (
  <Button variant="primary" onClick={() => performSave(todos)}>
    Save
  </Button>
);
export default SaveTodosButton;
