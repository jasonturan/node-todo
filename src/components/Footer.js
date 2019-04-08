import React from 'react';
import {VisibilityFilters} from '../actions';
import Link from './Link';

const Footer = ({visibilityFilter}) => (
  <div>
    <span>Show: </span>
    <Link
      visibilityFilter={visibilityFilter}
      filter={VisibilityFilters.SHOW_ALL}
      displayText="All"
    />
    <Link
      visibilityFilter={visibilityFilter}
      filter={VisibilityFilters.SHOW_ACTIVE}
      displayText="Active"
    />
    <Link
      visibilityFilter={visibilityFilter}
      filter={VisibilityFilters.SHOW_COMPLETED}
      displayText="Completed"
    />
  </div>
);

export default Footer;
