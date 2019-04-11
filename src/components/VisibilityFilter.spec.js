import React from 'react';
import VisibilityFilter from './VisibilityFilter';
import {shallow} from 'enzyme';
import {Dispatch} from '../CoreStore.js';
import {head} from 'ramda';
import {VisibilityFilters, ActionTypes} from '../actions';
import {getDispatchedEventsByName} from '../testHelpers.js';
import {Button} from 'react-bootstrap';

const {expect} = global;
it('renders without crashing', () => {
  shallow(<VisibilityFilter />);
});

it('contains a button', () => {
  const wrapper = shallow(<VisibilityFilter />);
  expect(wrapper.find('Button')).toHaveLength(1);
});

it('dispatches an set visibility event when clicked', () => {
  const wrapper = shallow(
    <VisibilityFilter
      visibilityFilter={VisibilityFilters.SHOW_ALL}
      filter={VisibilityFilters.SHOW_COMPLETED}
      displayText="Completed"
    />
  );
  wrapper.find('Button').simulate('click');
  expect(Dispatch).toHaveBeenCalledTimes(1);
  const expectedEvents = getDispatchedEventsByName(
    ActionTypes.SET_VISIBILITY_FILTER
  );
  expect(expectedEvents).not.toBeNull();
  expect(head(expectedEvents).visibilityFilter).toEqual(
    VisibilityFilters.SHOW_COMPLETED
  );
});
