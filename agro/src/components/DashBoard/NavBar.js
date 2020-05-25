/*
  TODO: Edit By Falye Kehinde
  Make the loading bar active when a task starts running -- idea, using context to manage states
*/
import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "react-bootstrap";

//Import our Loading Bar
import { LoadingBar } from '../Fallbacks/fallback';

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

  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  }

    return (
      <Navbar expand="lg" className="navbar-absolute fixed-top navbar-transparent">
        <Container fluid>
          <div className="navbar-wrapper">
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
      </Navbar>
    );
}

export default withRouter(Header);
