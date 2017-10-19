import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

// CSS
import './css/index.css';
import './css/navbar.css';
import './css/carrousel-marks.css';
import './css/whoAu.css';
import './css/ourC.css';
import './css/back-section.css';


// COMPONENTS
import App from './App';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
  registerServiceWorker();
