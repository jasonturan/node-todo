const {GetAllTodos, CreateOrUpdateTodos} = require('./todoRepository');
const {expect, it} = global;
const {assoc, map, concat, forEach,append } = require('ramda');
const {rowTodoMapper, todoRowMapper, createTodo} = require('../structFactories');
it('can get all todos', async () => {
   const todos = await GetAllTodos();
});

it('can update todos', async () => {
  const todos = await GetAllTodos();
      const testTodos = concat ([
        createTodo("NEW TODO"),
        createTodo("NEW TODO1")
      ],todos);

      await CreateOrUpdateTodos(testTodos);
});