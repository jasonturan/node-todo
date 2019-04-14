import React from 'react';
import TodoFilters from './TodoFilters';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import ReduxToastr from 'react-redux-toastr';
import {Form, Container, Row, Col} from 'react-bootstrap';
import {Store} from '../CoreStore';

const App = state => (
  <div>
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group
              className={state.todoList.todos.length === 0 ? 'd-none' : ''}
            >
              <TodoFilters visibilityFilter={state.visibilityFilter} />
            </Form.Group>
            <Form.Group>
              <TodoList
                todoList={state.todoList}
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
    <ReduxToastr store={Store} />
  </div>
);
export default App;
