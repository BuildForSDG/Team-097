import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Profile from "../profile/Profile";
import Ecommerce from "../ecommerce/ProductList";
import AgroNetwork from "../agronetwork/Components";
import Agrocomodity from "../Agrocomodity/Agrocomodity";
import "./Welcome.css";
import Timeline from "../social/Timeline";
import Register from "./Register";
import Login from "./Login";
import Welcome from "./Welcome";

const Navbar = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              AgroNetwork
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/Profile"}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Timeline"}>
                    Timeline
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Ecommerce"}>
                    Ecommerce
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/AgroNetwork"}>
                    AgroNetwork
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/Agrocomodity"}>
                    Agrocomodity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/welcome"}>
                    Welcome
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route path='/welcome' component={Welcome} />
              <Route path="/Profile" component={Profile} />
              <Route path="/Timeline" component={Timeline} />
              <Route path="/Ecommerce" component={Ecommerce} />
              <Route path="/Agronetwork" component={AgroNetwork} />
              <Route path="/Agrocomodity" component={Agrocomodity} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
