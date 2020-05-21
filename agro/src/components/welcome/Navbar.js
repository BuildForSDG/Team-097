import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import { HOME, LOGIN, REGISTER, ABOUT } from '../../routes/router';
import Logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <Navbar expand="md" style={styles.navbar}>
      <Link to={HOME} style={styles.brand}><Navbar.Brand><Image src={Logo}alt='agro-network' style={styles.logo} fluid />Agro-Network</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to={HOME} style={styles.link}>Welcome</Link>
          <Link to={LOGIN} style={styles.link}>Login</Link>
          <Link to={REGISTER} style={styles.link}>Register</Link>
          <Link to={ABOUT} style={styles.link}>About</Link>

          {/* Route Guide By Soyaya */}
          <Link to='/cart' style={styles.link}>Cart</Link>
          <Link to='/product' style={styles.link}>Product</Link>
          <Link to='/agronetwork' style={styles.link}>Agro-Network</Link>
          <Link to='/agrocommodity' style={styles.link}>Agro-Commodity</Link>
          <Link to='/profile' style={styles.link}>Profile</Link>
          {/* End */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const styles = {
    navbar: {
        marginTop: '-20px'
    },
    brand: {
        textDecoration: 'none',
        margin: '0 -10px 0',
        fontWeight: 'bold',
        display: 'block',
    },
    logo: {
        height: '80px',
        width: '80px',
        objectFit: 'cover'
    },
    link: {
        background: '#218838',
        margin: '5px 5px',
        padding: '5px 15px',
        borderRadius: '5px',
        color: 'white',
        width: '100%',
        textDecoration: 'none',
        fontWeight: '500',
        fontSize: '0.9rem'
    }
}


export default Navigation;
