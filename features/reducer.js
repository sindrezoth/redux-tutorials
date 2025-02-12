import { combineReducers } from 'redux';

import todosReducer from './todos/todosSlice.js';
import filtersReducer from './filters/filterSlice.js';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;
