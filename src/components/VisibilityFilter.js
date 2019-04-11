import React from 'react';
import {Dispatch} from '../CoreStore.js';
import {setVisibilityFilter} from '../actions';
import {Button} from 'react-bootstrap';

const VisibilityFilter = ({visibilityFilter, filter, displayText}) => (
  <Button
    className="mr-2"
    variant="primary"
    onClick={() => Dispatch(setVisibilityFilter(filter))}
    disabled={visibilityFilter === filter}
  >
    {displayText}
  </Button>
);
export default VisibilityFilter;
