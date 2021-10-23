import { createStore, compose } from 'redux';

import reducers from './reducers';
import { ISpreadsheetReducerState } from './reducers/spreadsheet.reducer';

export interface IReduxState {
  spreadsheet: ISpreadsheetReducerState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  /* preloadedState, */
  composeEnhancers(),
);

export default store;
