const actionTypes = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  SET_LIST_PAGE_INDEX: 'SET_LIST_PAGE_INDEX',
  CREATE_TODO_SET_NAME: 'CREATE_TODO_SET_NAME',
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  TODOS_SAVED: 'TODOS_SAVED',
  TODOS_LOADED: 'TODOS_LOADED',
  INIT: 'init'
};

const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const todosLoaded = todos => ({
  type: actionTypes.TODOS_LOADED,
  todos
});

export const addTodo = todoForm => ({
  type: actionTypes.ADD_TODO,
  todoForm
});

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  visibilityFilter: filter
});

export const setListPageIndex = newPageIndex => ({
  type: actionTypes.SET_LIST_PAGE_INDEX,
  newPageIndex
});

export const toggleTodo = todo => ({
  type: actionTypes.TOGGLE_TODO,
  todo
});

export const setCreateTodoText = newText => ({
  type: actionTypes.CREATE_TODO_SET_NAME,
  newText
});
export const ActionTypes = actionTypes;
export const VisibilityFilters = visibilityFilters;
