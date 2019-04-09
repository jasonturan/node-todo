import {ActionTypes} from '../actions';
import {map, assoc, append} from 'ramda';
import {createTodo} from '../structFactories';

const actionHandlers = {
  [ActionTypes.ADD_TODO]: action =>
    append(createTodo(action.todoForm.count, action.todoForm.text)),
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
