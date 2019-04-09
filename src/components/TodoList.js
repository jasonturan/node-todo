import React from 'react';
import Todo from './Todo';
import {pipe, filter, map} from 'ramda';
import {VisibilityFilters} from '../actions';

const todoFilter = visibilityFilter => todo => {
  if (visibilityFilter === VisibilityFilters.SHOW_ALL) return true;
  if (visibilityFilter === VisibilityFilters.SHOW_COMPLETED)
    return todo.completed;
  if (visibilityFilter === VisibilityFilters.SHOW_ACTIVE)
    return !todo.completed;
  throw 'Unknown VisibilityFilter:' + visibilityFilter;
};
const wrapUl = children => <ul>{children}</ul>;
const TodoList = ({todos, visibilityFilter}) =>
  pipe(
    filter(todoFilter(visibilityFilter)),
    map(todo => <Todo key={todo.id} todo={todo} />),
    wrapUl
  )(todos);
export default TodoList;
