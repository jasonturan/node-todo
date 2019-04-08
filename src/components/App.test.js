import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow, render } from 'enzyme'
import configureStore from 'redux-mock-store';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

const mockStore = configureStore();
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const state = {};
    const store = mockStore(state);
    const wrapper = shallow(
        <Provider store={store}>
            <App />
        </Provider>
    );
    console.log(wrapper.debug());
});
