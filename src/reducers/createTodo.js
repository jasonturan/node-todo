import {ActionTypes} from '../actions';
import {evolve, assoc, inc} from 'ramda';

const createTodo = (state = {text: '', count: 0}, action) => {
  if (ActionTypes.CREATE_TODO_SET_NAME === action.type) {
    return assoc('text', action.newText, state);
  }
  if (ActionTypes.ADD_TODO === action.type) {
    return evolve({count: inc, text: () => ''})(state);
  }
  return state;
};

export default createTodo;
