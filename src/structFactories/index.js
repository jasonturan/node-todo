import {VisibilityFilters} from '../actions';

export const createTodo = (id, text) => ({id, text, completed: false});
export const createTodoForm = () => ({
  text: '',
  count: 0,
  validationMessages: []
});

export const createRootState = () => ({
  todos : [],
  todoForm : createTodoForm(),
  visibilityFilter : VisibilityFilters.SHOW_ALL
});