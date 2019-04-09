const actionTypes = {
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  CREATE_TODO_SET_NAME: 'CREATE_TODO_SET_NAME',
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};
const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addTodo = createTodo => ({
  type: actionTypes.ADD_TODO,
  createTodo
});

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  visibilityFilter: filter
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
