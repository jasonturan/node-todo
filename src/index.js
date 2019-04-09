import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Dispatch, GetState, Subscribe} from './CoreStore.js';

Subscribe(() => {
  render(<App {...GetState()} />, document.querySelector('#root'));
});
Dispatch({type: 'init'});
