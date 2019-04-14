import React from 'react';
import Todo from './Todo';
import {range, filter, map, addIndex} from 'ramda';
import {VisibilityFilters} from '../actions';
import {ListGroup, ButtonGroup} from 'react-bootstrap';
import TodoPageButton from './TodoPageButton';
import SaveTodosButton from './SaveTodosButton';

const todoFilter = visibilityFilter => todo => {
  if (visibilityFilter === VisibilityFilters.SHOW_ALL) return true;
  if (visibilityFilter === VisibilityFilters.SHOW_COMPLETED)
    return todo.completed;
  if (visibilityFilter === VisibilityFilters.SHOW_ACTIVE)
    return !todo.completed;
  throw new Error('Unknown VisibilityFilter:' + visibilityFilter);
};

const TodoList = ({todoList, visibilityFilter}) => {
  const minIndex = todoList.pageIndex * todoList.pageSize;
  const maxIndex = (todoList.pageIndex + 1) * todoList.pageSize;
  const todosToDisplay = filter(todoFilter(visibilityFilter))(todoList.todos);
  const numberOfPages = Math.ceil(todosToDisplay.length / todoList.pageSize);
  const currentPageOfTodos = addIndex(filter)(
    (todo, index) => index >= minIndex && index < maxIndex
  )(todosToDisplay);
  const todoComponents = map(todo => <Todo key={todo.id} todo={todo} />)(
    currentPageOfTodos
  );
  const pageButtons = map(
    pageIndex => (
      <TodoPageButton
        key={pageIndex}
        pageIndex={pageIndex}
        listPageIndex={todoList.pageIndex}
      />
    ),
    range(0, numberOfPages)
  );

  return (
    <div>
      <ListGroup>{todoComponents}</ListGroup>
      <SaveTodosButton todos={todoList.todos} />
      <ButtonGroup className="float-right">{pageButtons}</ButtonGroup>
    </div>
  );
};
export default TodoList;
