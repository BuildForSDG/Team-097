import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Navbar from '../src/components/welcome/Navbar'
import * as serviceWorker from './serviceWorker';
import Welcome from './components/welcome/Welcome';


ReactDOM.render(
  <BrowserRouter>
    <Welcome/>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
