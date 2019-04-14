import App from './App';
import {shallow} from 'enzyme';
import {createRootState} from '../structFactories';

const {expect} = global;
const createApp = () => shallow(App(createRootState()));

it('renders without crashing', () => {
  createApp();
});

it('renders a todolist, addtodo, and footer', () => {
  const wrapper = createApp();
  expect(wrapper.find('TodoList')).toHaveLength(1);
  expect(wrapper.find('TodoForm')).toHaveLength(1);
  expect(wrapper.find('TodoFilters')).toHaveLength(1);
});
