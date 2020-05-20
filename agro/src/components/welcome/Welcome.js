import React from 'react'
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, Nav, } from 'react-bootstrap';
import About from './About';
import Login from './Login'
import Register from './Register'
import Home from './Home'
import './Welcome.css'


const Welcome = () => {
    return(
      <div>
        <div className = 'row'>
          <div className = 'col-12'>
          <Router>
            <Navbar bg="success" variant="dark" expand="sm" sticky="top" className ='box'> 
            <Nav className="navbar navbar-expand-sm navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/"}>AgroNetwork</Link>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id ='responsive-navbar-nav'>
                 <Nav className="ml-auto">
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/Home"}>Welcome</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/About"}>About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/Login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/Signup"}>Signup</Link>
                    </li>
                  </ul>
                </div></Nav></Navbar.Collapse>
                
               
              </div>
            </Nav>
            </Navbar>
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path="/register" component={Register} />
                  <Route path="/login" component={Login} />
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </Switch>
              </div>
            </div></Router>

                </div>
              </div>
            </div>
          
        )
      }

export default Welcome;
