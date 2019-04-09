import React from 'react';
import Link from './Link';
import {shallow} from 'enzyme';
import {Dispatch} from '../CoreStore.js';
import {head, pipe, flatten, filter} from 'ramda';
import {VisibilityFilters, ActionTypes} from '../actions';
import {getDispatchedEventsByName} from '../testHelpers.js';

const {expect} = global;
it('renders without crashing', () => {
  shallow(<Link />);
});

it('contains a button', () => {
  const wrapper = shallow(<Link />);
  expect(wrapper.find('button')).toHaveLength(1);
});

it('dispatches an set visibility event when clicked', () => {
  const wrapper = shallow(
    <Link
      visibilityFilter={VisibilityFilters.SHOW_ALL}
      filter={VisibilityFilters.SHOW_COMPLETED}
      displayText="Completed"
    />
  );
  wrapper.find('button').simulate('click');
  expect(Dispatch).toHaveBeenCalledTimes(1);
  const expectedEvents = getDispatchedEventsByName(ActionTypes.SET_VISIBILITY_FILTER);
  expect(expectedEvents).not.toBeNull();
  expect(head(expectedEvents).visibilityFilter).toEqual(
    VisibilityFilters.SHOW_COMPLETED
  );
});
