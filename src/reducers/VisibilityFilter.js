import {ActionTypes, VisibilityFilters} from '../actions';
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) =>
  ActionTypes.SET_VISIBILITY_FILTER === action.type
    ? action.visibilityFilter
    : state;
export default visibilityFilter;
