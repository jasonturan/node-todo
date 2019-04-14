import {ActionTypes} from '../actions';
import {identity, map, assoc, append} from 'ramda';
import {createTodo, createTodoList} from '../structFactories';
import {TodoFormIsValid} from './TodoForm';

const onAddTodo = (state, action) => {
  const newTodos = (TodoFormIsValid(action.todoForm)
    ? append(createTodo(action.todoForm.text))
    : identity)(state.todos);
  return assoc('todos', newTodos, state);
};

const onToggleTodo = (state, action) => {
  const newTodos = map(todo =>
    todo.id === action.todo.id
      ? assoc('completed', !todo.completed, todo)
      : todo
  )(state.todos);
  return assoc('todos', newTodos, state);
};

const onTodosLoaded = (state, action) => createTodoList(action.todos);

const onSetListPageIndex = (state, action) =>
  assoc('pageIndex', action.newPageIndex, state);

const onSetVisibilityFilter = state => assoc('pageIndex', 0, state);

const TodoList = (state = createTodoList(), action) => {
  if (ActionTypes.ADD_TODO === action.type) {
    return onAddTodo(state, action);
  } else if (ActionTypes.TOGGLE_TODO === action.type) {
    return onToggleTodo(state, action);
  } else if (ActionTypes.TODOS_LOADED === action.type) {
    return onTodosLoaded(state, action);
  } else if (ActionTypes.SET_LIST_PAGE_INDEX === action.type) {
    return onSetListPageIndex(state, action);
  } else if (ActionTypes.SET_VISIBILITY_FILTER === action.type) {
    return onSetVisibilityFilter(state);
  } else {
    return state;
  }
};

export default TodoList;
