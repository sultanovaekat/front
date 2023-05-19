import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {App} from "./router";
import Store from "./state/redux/store";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<Provider store = {Store} >*/}
          <App/>
      {/*</Provider>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

