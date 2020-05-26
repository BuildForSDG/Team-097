/*
  TODO:
  Include a NavBar to show some page information and toggle a collapsible div -- done
  Make Footer sticky -- done
  Restrict access to the dashboard except after loggin in -- done
  Make logged in info persist refresh using localstorage -- done
*/
import React, {useEffect, useState, useRef, useContext, Suspense, lazy} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

// Import our fallback
import { LoadingBar } from '../Fallbacks/fallback';

// Import the sidebar
import SideBar from '../SideBar/SideBar';
// Import the footer
import Footer from './Footer';
// Import the NavBar
import NavBar from './NavBar';
// Import our context
import { Context } from '../../configs/ContextProvider';
// Let's import our routes
import routes from '../../routes/router';

function DashBoard (props) {
  //State for the routes
  const [views, setViews ] = useState([]);
  //For scrolling to the top should a browser history push occurs
  const mainPanel = useRef();
  // Let's connect to our global state
  let { state, dispatch } = useContext(Context);

  // This function is passed to the NavBar component to clear the cookies and log the user out
  const logout = () => {
    // Let's remove the email and username
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    // Let's remove the loggedIn item
    localStorage.removeItem('isLoggedIn');
    // Let's set our state and trigger render
    dispatch({type:'reset'});
  }

  // This function would populate the view
  const populateRouteViews = () => {
    console.log('as')
	  //Populate the views. But bail out if user is not authorised or not logged in
    if(localStorage.getItem('isLoggedIn')){
      // First let define that we are doing work
      if(!state.working){
        dispatch({type:'setWorking',payload:{state}});
      }
      // Only set context if it isn't already set
      if(!state.email || !state.username || !state.isLoggedIn){
        // Set our context with the passed props of the Login component
        const payload = {
          state, 
          email:localStorage.getItem('email'),
          username:localStorage.getItem('username'), 
          isLoggedIn:localStorage.getItem('isLoggedIn')
        };
        dispatch({type:'setUserStatus', payload});
      }
      // Let's lazy load all the views that can be accessed from the dashboard
      if(views.length <= 0) {
        let views = [];
        routes.map((prop, key) => {
          views.push(<Route path={prop.layout + prop.path} 
            component={lazy(() => import('../'+prop.component))} 
            key={key} />
          );
          return true;
        });
        setViews(views);
      }
      // Let's set that we are done doing work
      dispatch({type:'unsetWorking',payload:{state}});
    }
  }

  useEffect(() => {
    populateRouteViews();
  },[]);

  return (
    localStorage.getItem('isLoggedIn') ?
      <div className="wrapper">
        <SideBar routes={routes} />
        <div className="main-panel" style={{minHeight:'100%'}} ref={mainPanel}>
          <NavBar routes={routes} logout={logout} />
          <Suspense fallback={ <LoadingBar /> }>
            <Switch>
              { views }
            </Switch>
          </Suspense>
          <Footer style={{
  		      position: 'absolute',
      		  bottom: 0,
      		  width: '100%'
          }} fluid />
        </div>
      </div>
    :
      <Redirect to={{pathname:'/'}} />
	);
}
export default DashBoard;
