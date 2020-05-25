/*
  TODO:
  Include a NavBar to show some page information and toggle a collapsible div -- done
  Make Footer sticky -- done
  Restrict access to the dashboard except after loggin in -- done
  Make logged in info persist refresh using localstorage
*/
import React, {useEffect, useState, useRef, useContext, Suspense, lazy} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

// Import our fallback
import ProgressBar from '../Fallbacks/fallback';

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

  useEffect(() => {

	//Populate the views. But bail out if user is not authorised or not logged in
    if(localStorage.getItem('isLoggedIn')){
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
  },[state]);

  return (
    localStorage.getItem('isLoggedIn') ?
      <div className="wrapper">
        <SideBar routes={routes} />
        <div className="main-panel" style={{minHeight:'100%'}} ref={mainPanel}>
          <NavBar routes={routes} />
          <Suspense fallback={ <ProgressBar /> }>
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
      <Redirect to='/' />
	);
}
export default DashBoard;
