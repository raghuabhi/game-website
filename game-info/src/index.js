import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// redux setup
import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './reducers/gamesReducer';
import { Provider } from 'react-redux'
import detailReducer from './reducers/detailReducer';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
    games: gamesReducer,
    detail: detailReducer,
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



