import {createStore} from 'redux';
import rootReducer from './reducers';
import {GetAllTodos} from './data/todoRepository';
import {todosLoaded} from './actions';

const store = createStore(rootReducer);
GetAllTodos().then(
  todos => {
    store.dispatch(todosLoaded(todos));
  },
  error => {
    throw new Error(error);
  }
);

export const Store = store;
export const Dispatch = store.dispatch;
export const Subscribe = store.subscribe;
export const GetState = store.getState;
