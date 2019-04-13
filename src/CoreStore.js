import {createStore} from 'redux';
import rootReducer from './reducers';
import {GetAllTodos} from './data/todoRepository';

const todos = GetAllTodos();
const store = createStore(rootReducer);
export const Dispatch = store.dispatch;
export const Subscribe = store.subscribe;
export const GetState = store.getState;
