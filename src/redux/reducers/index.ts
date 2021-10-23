import { combineReducers } from 'redux';

import spreadsheetReducer from './spreadsheet.reducer';

const rootReducer = combineReducers({
  spreadsheet: spreadsheetReducer,
});

export default rootReducer;
