import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  HOME,
  REGISTER,
  LOGIN,
  DASHBOARD,
  ABOUT,
  PRODUCT,
  PROFILE,
  AGRO_COMMODITY,
  AGRO_NETWORK,
} from "./routes/router";
import Home from "./components/welcome/Home";
import Register from "./components/welcome/Register";
import Login from "./components/welcome/Login";
import Dashboard from "./components/welcome/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import About from "./components/welcome/About";
import Logo from "./assets/logo.png";
import { Navbar, Nav, Image } from "react-bootstrap";

// Components  Guide By Soyaya
import Product from "./components/ecommerce/Product";
import Cart from "./components/ecommerce/Cart";
import Agronetwork from "./components/agronetwork/AgroNetwork";
import Agrocomodity from "./components/Agrocomodity/Agrocomodity";
import Profile from "./components/profile/Profile";
import Timeline from "./components/social/Timeline";
// End

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    {
      authenticated ? setAuthenticated(true) : setAuthenticated(false);
    }
  });

  return (
    <Router>
      <div>
        {!authenticated && (
          <Navbar expand="md" style={styles.navbar}>
            <Link to={HOME} style={styles.brand}>
              <Navbar.Brand>
                <Image
                  src={Logo}
                  alt="agro-network"
                  style={styles.logo}
                  fluid
                />
                Agro-Network
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to={HOME} style={styles.link}>
                  Welcome
                </Link>
                <Link to={LOGIN} style={styles.link}>
                  Login
                </Link>
                <Link to={REGISTER} style={styles.link}>
                  Register
                </Link>
                <Link to={ABOUT} style={styles.link}>
                  About
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}

        {authenticated && (
          <Navbar expand="md" style={styles.navbar}>
            <Link to={HOME} style={styles.brand}>
              <Navbar.Brand>
                <Image
                  src={Logo}
                  alt="agro-network"
                  style={styles.logo}
                  fluid
                />
                Agro-Network
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to={AGRO_NETWORK} style={styles.link}>
                  Agro-Network
                </Link>
                <Link to={AGRO_COMMODITY} style={styles.link}>
                  Agro-Commodity
                </Link>
                <Link to={PRODUCT} style={styles.link}>
                  Product
                </Link>
                <Link to={PROFILE} style={styles.link}>
                  Profile
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>

      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={REGISTER} component={Register} />
        <Route path={LOGIN} component={Login} />
        <Route path={ABOUT} component={About} />
        <ProtectedRoute
          authenticated={authenticated}
          path={DASHBOARD}
          component={Dashboard}
        />
      </Switch>
    </Router>
  );
};

const styles = {
  navbar: {
    marginTop: "-20px",
  },
  brand: {
    textDecoration: "none",
    margin: "0 -10px 0",
    fontWeight: "bold",
    display: "block",
  },
  logo: {
    height: "80px",
    width: "80px",
    objectFit: "cover",
  },
  link: {
    background: "#218838",
    margin: "5px 5px",
    padding: "5px 15px",
    borderRadius: "5px",
    color: "white",
    width: "100%",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "0.9rem",
  },
};

export default App;
