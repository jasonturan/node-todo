import React from 'react';
import {VisibilityFilters} from '../actions';
import VisibilityFilter from './VisibilityFilter';
const TodoFilters = ({visibilityFilter}) => (
  <div>
    <VisibilityFilter
      visibilityFilter={visibilityFilter}
      filter={VisibilityFilters.SHOW_ALL}
      displayText="All"
    />
    <VisibilityFilter
      visibilityFilter={visibilityFilter}
      filter={VisibilityFilters.SHOW_ACTIVE}
      displayText="Active"
    />
    <VisibilityFilter
      visibilityFilter={visibilityFilter}
      filter={VisibilityFilters.SHOW_COMPLETED}
      displayText="Completed"
    />
  </div>
);

export default TodoFilters;
