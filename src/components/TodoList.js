import React from 'react';
import Todo from './Todo';
import {pipe, filter, map} from 'ramda';
import {VisibilityFilters} from '../actions';
import {ListGroup} from 'react-bootstrap';

const todoFilter = visibilityFilter => todo => {
  if (visibilityFilter === VisibilityFilters.SHOW_ALL) return true;
  if (visibilityFilter === VisibilityFilters.SHOW_COMPLETED)
    return todo.completed;
  if (visibilityFilter === VisibilityFilters.SHOW_ACTIVE)
    return !todo.completed;
  throw new Error('Unknown VisibilityFilter:' + visibilityFilter);
};

const wrap = children => <ListGroup>{children}</ListGroup>;
const TodoList = ({todos, visibilityFilter}) =>
  pipe(
    filter(todoFilter(visibilityFilter)),
    map(todo => <Todo key={todo.id} todo={todo} />),
    wrap
  )(todos);
export default TodoList;
