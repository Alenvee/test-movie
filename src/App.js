import React from 'react';
import { Provider } from 'mobx-react';
import { userStore, moviesStore } from './store';
import { Router } from './routes';

function App() {
  return (
    <Provider
      userStore={userStore}
      movieStore={moviesStore}
    >
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
