import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Navbar1 from './components/welcome/Navbar1'
import * as serviceWorker from './serviceWorker';
import Welcome from './components/welcome/Welcome';


ReactDOM.render(
  <BrowserRouter>
    <Navbar1/>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
