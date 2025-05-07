// React
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';

// i18next
import './Components/i18n'

// Redux
import { Provider } from "react-redux"
import { store } from './Components/ReduxFiles/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
