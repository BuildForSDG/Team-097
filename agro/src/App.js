/*
  TODO: Edit by Kehinde Faleye.
  Only load the login and navbar containing the about alone -- done
  Lazy load most components here for optimization -- done
  Remove the name of soyaya routes -- done
  The logo is expensive to load, move to CDN when deploying
  !Important: All pages would be reviewed for accessibility
  !Important: Use Create browser history. withRouter does not push history
  Create a Global state Object for all routes -- done
*/
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/welcome/Login';
// Import our fallback
import PageFallBack from './components/Fallbacks/fallback';
// Import our Context Povider
import { ContextProvider } from './configs/ContextProvider';

const Register = lazy(() => import('./components/welcome/Register'));
// import Dashboard from './components/welcome/Dashboard' // Lazy load this component also. Not needed till login
const Dashboard = lazy(() => import('./components/DashBoard/DashBoard'));
// import About from './components/welcome/About' // Lazy load this also, smae reason as above.
const About  = lazy(() => import('./components/welcome/About'));


const App = () => {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Suspense fallback={<PageFallBack />}>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/about' component={About} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </Suspense>
        </Router>
      </ContextProvider>
      </div>
  );
};

export default App;
