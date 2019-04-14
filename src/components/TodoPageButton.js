import React from 'react';
import {Dispatch} from '../CoreStore.js';
import {setListPageIndex} from '../actions';
import {Button} from 'react-bootstrap';

const TodoPageButton = ({pageIndex, listPageIndex}) => (
  <Button
    variant="outline-primary"
    onClick={() => Dispatch(setListPageIndex(pageIndex))}
    disabled={pageIndex === listPageIndex}
  >
    {pageIndex + 1}
  </Button>
);
export default TodoPageButton;
