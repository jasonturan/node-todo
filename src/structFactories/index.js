const {VisibilityFilters} = require ('../actions');
const uuidv1 = require("uuid/v1");

export const rowTodoMapper = row => ({id: row.id, title: row.info.title, completed: row.info.completed});
export const todoRowMapper = todo => ({id: todo.id, info: {title: todo.title, completed: todo.completed}});

export const createTodo = title => ({id:uuidv1(), title, completed: false});
export const createTodoForm = () => ({
  text: '',
  count: 0,
  validationMessages: []
});

export const createRootState = (todos = []) => ({
  todos : todos,
  todoForm : createTodoForm(),
  visibilityFilter : VisibilityFilters.SHOW_ALL
});