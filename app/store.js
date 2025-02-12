//import { configureStore } from '@reduxjs/toolkit';
//
//const store = configureStore({
//  reducers: {
//
//  }
//});
//
//export default store;

import { createStore } from 'redux';
import rootReducer from '../features/reducer.js';

let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if(persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const store = createStore(rootReducer, preloadedState);

export default store;
