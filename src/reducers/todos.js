import {ActionTypes} from '../actions';
import {map, assoc, append} from 'ramda';

const todoFactory = (id, text) => ({id, text, completed: false});

const todos = (state = [], action) => {
  if (action.type === ActionTypes.ADD_TODO) {
    return append(
      todoFactory(action.createTodo.count, action.createTodo.text),
      state
    );
  } else if (action.type === ActionTypes.TOGGLE_TODO) {
    return map(
      todo =>
        todo.id === action.todo.id
          ? assoc('completed', !todo.completed, todo)
          : todo,
      state
    );
  } else {
    return state;
  }
};
export default todos;
