/*
  TODO:
  Make the loading bar active when a task starts running -- idea, using context to manage states
*/
import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Container,
  Button
} from "react-bootstrap";

// Import our logo
import Logo from "../../assets/logos/AG_cow.png";

// Import our Loading Bar
// import { LoadingBar } from '../Fallbacks/fallback'; //This component would be able to work after context is set up

function Header(props) {

  //The ref for the button used to open the dashboard when resize
  const sidebarToggle = useRef();

  const getBrand = () => {
    let brandName = "Agro-Network";
    props.routes.map((prop, key) => {
      if (props.location.pathname === prop.layout + prop.path) {
        brandName = prop.heading;
      }
      return brandName;
    });
    return brandName;
  }

  // This function would open the sidebar when the screen size is small
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  }
    return (
      <Navbar expand="lg" className="navbar-absolute fixed-top navbar-transparent" style={{'flexWrap':'nowrap'}} >
        <Container fluid>
          <div className="navbar-wrapper">
            <img src={Logo} alt='agro-network' id='logo' fluid="true" />
            <div className="navbar-toggle">
              <button type="button" ref={sidebarToggle} className="navbar-toggler" onClick={openSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand>
              <div style={{display:'flex',alignItems:'center'}}>
                {/*<LoadingBar />*/}
                <p style={{color:'grey'}}> { getBrand() } </p>
              </div>
            </NavbarBrand>
          </div>
        </Container>
        <Button variant='outline-success' style={{float:'right'}} size='sm' onClick={props.logout} >
          LogOut
        </Button>
      </Navbar>
    );
}

export default withRouter(Header);
