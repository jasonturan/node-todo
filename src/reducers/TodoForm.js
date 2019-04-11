import {ActionTypes} from '../actions';
import {pipe, evolve, assoc, inc} from 'ramda';
import {createTodoForm} from '../structFactories';

const todoFormIsValid = todoForm => todoForm.text.length > 0;

const todoForm = (state = createTodoForm(), action) => {
  if (ActionTypes.CREATE_TODO_SET_NAME === action.type) {
    return pipe(
      assoc('text', action.newText),
      assoc('validationMessages', [])
    )(state);
  }
  if (ActionTypes.ADD_TODO === action.type) {
    if (todoFormIsValid(action.todoForm)) {
      return evolve({count: inc, text: () => ''})(state);
    } else {
      return assoc('validationMessages', ['Todo cannot be empty'])(state);
    }
  }
  return state;
};

export const TodoForm = todoForm;
export const TodoFormIsValid = todoFormIsValid;
