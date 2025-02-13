//import { configureStore } from '@reduxjs/toolkit';
//
//const store = configureStore({
//  reducers: {
//
//  }
//});
//
//export default store;

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../features/reducer.js';

let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if(persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const mw = applyMiddleware(attentionMessage);

const store = createStore(rootReducer, preloadedState, mw);//, attentionMessage);

export default store;

function attentionMessage(storeAPI) {
  return (next) => {
    return (action) => {
      //console.log(storeAPI.getState());
      const res = next(action);
      //console.log(res);
      //console.log(storeAPI.getState());
      return res;
    }
  }
}
