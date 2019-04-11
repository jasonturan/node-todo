import {ActionTypes} from '../actions';
import {identity, map, assoc, append} from 'ramda';
import {createTodo} from '../structFactories';
import {TodoFormIsValid} from './TodoForm';

const actionHandlers = {
  [ActionTypes.ADD_TODO]: action =>
    TodoFormIsValid(action.todoForm)
      ? append(createTodo(action.todoForm.count, action.todoForm.text))
      : identity,
  [ActionTypes.TOGGLE_TODO]: action =>
    map(todo =>
      todo.id === action.todo.id
        ? assoc('completed', !todo.completed, todo)
        : todo
    )
};

const todos = (state = [], action) => {
  const actionToPerform = actionHandlers[action.type];
  if (actionToPerform === undefined) return state;
  return actionToPerform(action)(state);
};

export default todos;
