import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export const Dispatch = store.dispatch;
export const Subscribe = store.subscribe;
export const GetState = store.getState;
