import {combineReducers} from 'redux';
import todos from './Todos';
import todoForm from './TodoForm.js';
import visibilityFilter from './VisibilityFilter';
export default combineReducers({
  todos,
  todoForm,
  visibilityFilter
});
