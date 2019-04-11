import React from 'react';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import {Form, Container, Row, Col} from 'react-bootstrap';

const App = state => (
  <Container>
    <Row>
      <Col>
        <Form>
          <Form.Group className={state.todos.length === 0 ? 'd-none' : ''}>
            <TodoFilters visibilityFilter={state.visibilityFilter} />
          </Form.Group>
          <Form.Group>
            <TodoList
              todos={state.todos}
              visibilityFilter={state.visibilityFilter}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col>
        <TodoForm todoForm={state.todoForm} />
      </Col>
    </Row>
  </Container>
);
export default App;
