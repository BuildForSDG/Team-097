import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME, REGISTER, LOGIN, DASHBOARD, ABOUT } from "./routes/router";
import Home from './components/welcome/Home'
import Register from './components/welcome/Register'
import Login from './components/welcome/Login'
import Dashboard from './components/welcome/Dashboard'
import About from './components/welcome/About'


// Components  Guide By Soyaya
import Product from './components/ecommerce/Product';
import Cart from './components/ecommerce/Cart';
import Agronetwork from './components/agronetwork/AgroNetwork';
import Agrocomodity from './components/Agrocomodity/Agrocomodity';
import Profile from './components/profile/Profile';
import Timeline from './components/social/Timeline'
// End

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={REGISTER} component={Register} />
        <Route path={LOGIN} component={Login} />
        <Route path={DASHBOARD} component={Dashboard} />
        <Route path={REGISTER} component={Register} />
        <Route path={ABOUT} component={About} />

        {/* Route Guides By Soyaya */}
        <Route exact path='/' component={Timeline} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Product" component={Product} />
        <Route path="/Agronetwork" component={Agronetwork} />
        <Route path="/Agrocomodity" component={Agrocomodity} />
        <Route path="/Profile" component={Profile} />
        {/* End */}
      </Switch>
    </Router>
  );
};

export default App;
