import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//To access the upper state
import { Provider } from 'react-redux'
import generateStore from './redux/store';

import { BrowserRouter } from 'react-router-dom';

const store = generateStore();

ReactDOM.render(  
  <Provider store={store} > 
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

