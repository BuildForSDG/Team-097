import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import "./Welcome.css";
import Register from "./Register";

const Welcome = () => {
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
                  <Link className="nav-link" to={"/Home"}>
                    Welcome
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/About"}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/register"}>
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/About" component={About} />
              <Route path="/Home" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Welcome;
