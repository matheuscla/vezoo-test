import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/globals'
import { Provider } from 'react-redux';
import store from './store';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);