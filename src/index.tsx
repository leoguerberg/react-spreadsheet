import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import './index.css';

import Spreadsheet from './containers/SpreadsheetContainer';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Spreadsheet />
  </ReduxProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
