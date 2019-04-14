const {GetAllTodos, CreateOrUpdateTodos} = require('./todoRepository');
const {expect, it} = global;
const {concat} = require('ramda');
const {createTodo} = require('../structFactories');
it('can get all todos', async () => {
  const todos = await GetAllTodos();
  expect(todos).not.toBeNull();
});

it('can update todos', async () => {
  const todos = await GetAllTodos();
  const testTodos = concat(
    [createTodo('NEW TODO'), createTodo('NEW TODO1')],
    todos
  );

  await CreateOrUpdateTodos(testTodos);
});
