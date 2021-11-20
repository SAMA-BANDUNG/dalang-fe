import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import axios from "axios";
// import * as _redux from "./redux";
// import store, { persistor } from "./redux/store/store";
// import store from "./redux/store/store";
import reportWebVitals from './reportWebVitals';

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
//  const { PUBLIC_URL } = process.env;

/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
//  _redux.setupAxios(axios, store);

ReactDOM.render(
  <React.StrictMode>
    {/* <App store={store} persistor={persistor} basename={PUBLIC_URL} /> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
