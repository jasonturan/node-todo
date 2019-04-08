import React from 'react';
import App from './App';
import {configure, shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';

const mockStore = configureStore();
configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const state = {};
  const store = mockStore(state);
  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  //console.log(wrapper.debug());
});
