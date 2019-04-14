import {combineReducers} from 'redux';
import TodoList from './TodoList';
import {TodoForm} from './TodoForm.js';
import visibilityFilter from './VisibilityFilter';
import {reducer as toastrReducer} from 'react-redux-toastr';
export default combineReducers({
  todoList: TodoList,
  todoForm: TodoForm,
  visibilityFilter,
  toastr: toastrReducer
});
