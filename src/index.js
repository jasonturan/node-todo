import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Dispatch, GetState, Subscribe} from './CoreStore.js';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

Subscribe(() => {
  render(<App {...GetState()} />, document.querySelector('#root'));
});
Dispatch({type: 'init'});
