import {Dispatch} from './CoreStore.js';
import {todoFactory} from './reducers/Todos.js';
import {pipe, flatten, filter} from 'ramda';
export const createTestTodo = () => todoFactory(0,'test');
export const getDispatchedEvent = eventFilter =>
  pipe(
    flatten,
    eventFilter
  )(Dispatch.mock.calls);

export const getDispatchedEventsByName = eventName =>
  getDispatchedEvent(filter(dispatchArgument => dispatchArgument.type === eventName))
