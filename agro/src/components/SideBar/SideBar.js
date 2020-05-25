/*
  TODO:Edit By Kehinde Faleye
  Make a sticky dashboard -- done
  Add an header to the dashboard --done
  Change the useRouter to the history class instead
  Use pretty scroller to remove the scrollbar unsr the sidebar
*/
import React, { useRef, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap'; 
// The logo for the header
//import logo from "../../assets/logo.png";

// Import our css
import './SideBar.css'

function SideBar(props) {

  //The ref for the sidebar, to add scrollbar
  const sidebar = useRef();

  //remove scrollbar to the sidebar
  useEffect(() => {
    // if (navigator.platform.indexOf("Win") > -1) {
    //   new PerfectScrollbar(sidebar.current, {
    //     suppressScrollX: true,
    //     suppressScrollY: false
    //   });
    // }
  });
    return (
		<div className="sidebar" data-color='black' data-active-color='info' >
	        <div className="logo" style={{display:'flex',justifyContent:'center'}} >
	          <a href='/dashboard' className="simple-text logo-normal" >
	            Agro-Networks
	          </a>
	        </div>
	        <div className="sidebar-wrapper" ref={sidebar}>
	          <Nav style={{paddingLeft:'30px', marginTop:'60px'}}>
	            {props.routes.map((prop, key) => {
	              return (
	                <li
	                  className={ props.location.pathname.indexOf(prop.path) > -1 ? "active" : "" }
	                  key={key} 
	                  style={{marginBottom:'20px'}}
	                >
	                  
	                  <NavLink
	                    to={prop.layout + prop.path}
	                    className="nav-link"
	                    style={{color:props.location.pathname.indexOf(prop.path) > -1 ? "#218738" : "" }}
	                  >
	                    <i className={prop.icon} />
	                    <p>{prop.name}</p>
	                  </NavLink>
	                </li>
	              );
	            })}
	          </Nav>
	        </div>
      </div>
    )
}

export default withRouter(SideBar);
