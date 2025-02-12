import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store.js';

import TodoList from './components/TodoList.js';
import TodoFilters from './components/TodoFilters.js';
import TodoIpnput from './components/TodoInput.js'

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="container-main"> 
          <header>
            <h1>Redux Example</h1>
          </header>

          <main>
            <h2>Todos</h2>
            <section className="todo-list">
              <TodoIpnput />
              <TodoList />
            </section>
          </main>

          <footer>
            <TodoFilters />
          </footer>
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
