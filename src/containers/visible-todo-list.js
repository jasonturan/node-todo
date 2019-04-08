import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from '../components/TodoList';
import {VisibilityFilters} from '../actions';



const mapStateToProperties = state =>
  //debugger;
  ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  });

const mapDispatchToProperties = dispatch =>
  // debugger;
  ({
    toggleTodo: id => dispatch(toggleTodo(id))
  });
export default connect(
  mapStateToProperties,
  mapDispatchToProperties
)(TodoList);
