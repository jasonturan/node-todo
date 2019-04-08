import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = state => (
  <div>
    {JSON.stringify(state)}
    <TodoList todos={state.todos} visibilityFilter={state.visibilityFilter} />
    <AddTodo createTodo={state.createTodo} />
    <Footer visibilityFilter={state.visibilityFilter} />
  </div>
);
export default App;
