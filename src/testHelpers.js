import {Dispatch} from './CoreStore.js';
import {pipe, flatten, filter} from 'ramda';
export const getDispatchedEvent = eventFilter =>
  pipe(
    flatten,
    eventFilter
  )(Dispatch.mock.calls);

export const getDispatchedEventsByName = eventName =>
  getDispatchedEvent(
    filter(dispatchArgument => dispatchArgument.type === eventName)
  );
