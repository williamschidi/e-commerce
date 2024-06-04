import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './features/api/store.js';
import DataFetchingComponent from './features/api/DataFetchingComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <DataFetchingComponent />
    </Provider>
  </React.StrictMode>
);
