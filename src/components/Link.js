import React from 'react';
import {Dispatch} from '../CoreStore.js';
import {setVisibilityFilter} from '../actions';

const Link = ({visibilityFilter, filter, displayText}) => (
  <button
    onClick={() => Dispatch(setVisibilityFilter(filter))}
    disabled={visibilityFilter === filter}
    style={{
      marginLeft: '4px'
    }}
  >
    {displayText}
  </button>
);
export default Link;
