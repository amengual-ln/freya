import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { DataFetcher } from './components/DataFetcher'
import store from "./store";

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DataFetcher>
        <App />
      </DataFetcher>
    </Provider>
  </React.StrictMode>
)
