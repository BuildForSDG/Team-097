/*
  TODO: Edit by Kehinde Faleye
  Remove some links -- done
  Add a color to the navbar. White looks bland -- done
  The links have too much height or padding to them, reduce that or remove --done
  This navbar wouldn't be needed once there is a dashboard -- true
  The links should be styled for the hover event -- done
  Style for the collapsible and populate element inside
  Use img insteada of bootstrap image -- done
  Find a way to make logo size small. Ver small, it's a bottleneck -- i did some logos
  Check out all the logos, which one would you prefer or suggest a nicer one. Check the AGreen_black
*/
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import { HOME, LOGIN, REGISTER, ABOUT } from '../../routes/router'; // We dont need all this component in the landing page
// Import our logo and banner
import Logo from "../../assets/logos/AG_cow.png";
import banner from "../../assets/logos/AGreen.png";

import './css/NavBar.css';

const Navigation = () => {
  return (
    <Navbar expand="md" id='navbar' >
    <div id='brand' >
      <Link to='/' id='logoLink' >
        <Navbar.Brand>
          <img src={Logo} alt='agro-network' id='logo' fluid="true" />
        </Navbar.Brand>
      </Link>
    
      <Link to='/' id='banner' >
          <img src={banner} alt='agro-network' fluid="true" />
      </Link>
    </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {/* Uneeded Links for now. Move to dasboard
            <Link to={HOME} style={styles.link}>Welcome</Link>
            <Link to={LOGIN} style={styles.link}>Login</Link>
            <Link to={REGISTER} style={styles.link}>Register</Link>
            <Link to={ABOUT} style={styles.link}>About</Link>

            Route Guide By Soyaya
            <Link to='/cart' style={styles.link}>Cart</Link>
            <Link to='/product' style={styles.link}>Product</Link>
            <Link to='/agronetwork' style={styles.link}>Agro-Network</Link>
            <Link to='/agrocommodity' style={styles.link}>Agro-Commodity</Link>
            <Link to='/profile' style={styles.link}>Profile</Link>
          */}
          {/*Moved to the login component <Link to='/about' style={ styles.link }> About </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// Move this styles to a separate css file to reduce code size and easy event styling like hover
/*
const styles = {
   // The navbar styling might break. I am making it a sticky component instead, also added height and bgColor
    navbar: {
      height: '70px',
      backgroundColor: '#218738'
    },
    brand: {
      display: 'grid',
      width: '-webkit-fill-available',
      gridTemplateColumns: '.5fr 3fr',
      gridTemplateRows: '70px'
    },
    logo: {
      height: '80px',
      width: '80px',
      objectFit: 'cover'
    },
    logoLink: {
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center'
    },
    link: {
      
      // background: '#218838',
      // margin: '5px 5px',
      // padding: '5px 15px',
      // borderRadius: '5px',
      // color: 'white',
      // width: '100%',
      // textDecoration: 'none',
      // fontWeight: '500',
      // fontSize: '0.9rem'
      color: 'white',
      fontWeight: '500',
      fonSize: 'smaller'
    },

    banner: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      color: 'white',
      fontSize: 'xx-large',
      fontWeight: '100'
    }

}
*/


export default Navigation;
