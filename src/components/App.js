import React from 'react';
import Footer from './Footer';
import TodoList from './TodoList';
import TodoForm from './TodoForm'

const App = state => (
  <div>
    {JSON.stringify(state)}
    <TodoList todos={state.todos} visibilityFilter={state.visibilityFilter} />
    <TodoForm todoForm={state.todoForm} />
    <Footer visibilityFilter={state.visibilityFilter} />
  </div>
);
export default App;
