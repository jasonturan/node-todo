import {combineReducers} from 'redux';
import todos from './todos';
import createTodo from './createTodo.js';
import visibilityFilter from './visibility-filter';
export default combineReducers({
  todos,
  createTodo,
  visibilityFilter
});
