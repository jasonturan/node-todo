import React from 'react';
import Todo from './Todo';
import {pipe, filter, map} from 'ramda';
import {VisibilityFilters} from '../actions';

const TodoList = ({todos, visibilityFilter}) => {
  const todoFilter = todo => {
    if (visibilityFilter === VisibilityFilters.SHOW_ALL) return true;
    if (visibilityFilter === VisibilityFilters.SHOW_COMPLETED)
      return todo.completed;
    if (visibilityFilter === VisibilityFilters.SHOW_ACTIVE)
      return !todo.completed;
    throw 'Unknown VisibilityFilter:' + visibilityFilter;
  };
  return (
    <ul>
      {pipe(
        filter(todoFilter),
        map(todo => <Todo key={todo.id} todo={todo} />)
      )(todos)}
    </ul>
  );
};
export default TodoList;
