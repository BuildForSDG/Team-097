import React from 'react'
import  { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import Product from '../ecommerce/Product';
import Cart from '../ecommerce/Cart';
import Agronetwork from '../agronetwork/AgroNetwork';
import Agrocomodity from '../Agrocomodity/Agrocomodity';
import Profile from '../profile/Profile';
import Timeline from '../social/Timeline'

 const Navbar1 =()=>  {
    
        return (
            <div>
                <div className = 'row'>
                    <div className = 'col-12'>
                <Router>
                    <Navbar collapseOnSelect expand="sm" bg="success" variant="dark">
                        <Navbar.Brand to={"/"}>AgroNetwork</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ml-auto">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                        <Link className="nav-link" to={"/Home"}>Timeline</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to={"/Profile"}>Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to={"/Agrocomodity"}>Agrocomodity</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to={"/Agronetwork"}>AgroNetwork</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to={"/Product"}><i class="fas fa-shopping-basket    "></i> Product</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to={"/Cart"}><i class="fa fa-shopping-cart" aria-hidden="true">Cart</i></Link>
                                        </li>
                                    </ul>
                                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                            <Route exact path='/' component={Timeline} />
                            <Route path="/Cart" component={Cart} />
                            <Route path="/Product" component={Product} />
                            <Route path="/Agronetwork" component={Agronetwork} />
                            <Route path="/Agrocomodity" component={Agrocomodity} />
                            <Route path="/Profile" component={Profile} />
                            </Switch>
                        </div>
                        </div>
                                </Router>
                
            </div></div></div>
        )
    }
export default Navbar1;