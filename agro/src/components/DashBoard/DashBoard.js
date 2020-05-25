/*
  TODO: Edit by Kehinde Faleye
  Include a NavBar to show some page information and toggle a collapsible div
  Make Footer sticky

*/
import React, {useEffect, useState, useRef, Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';

// Import our fallback
import ProgressBar from '../Fallbacks/fallback';

// Import the sidebar
import SideBar from '../SideBar/SideBar';
// Import the footer
import Footer from './Footer';
// Import the NavBar
import NavBar from './NavBar';

// Let's import our routes
import routes from '../../routes/router';

function DashBoard (props) {

  //State for the routes
  const [views, setViews ] = useState([]);

  //For scrolling to the top should a browser history push occurs
  const mainPanel = useRef();

  useEffect(() => {
	//Populate the views
    let views = [];
    routes.map((prop, key) => {
      views.push(<Route path={prop.layout + prop.path} 
        component={lazy(() => import('../'+prop.component))} 
        key={key} />
      );
    return true
  });

    setViews(views);
  },[]);

  return (
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
	);
}
export default DashBoard;
