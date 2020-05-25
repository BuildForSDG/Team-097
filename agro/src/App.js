/*
  TODO: Edit by Kehinde Faleye.
  Only load the login and navbar containing the about alone -- done
  Lazy load most components here for optimization -- done
  Remove the name of soyaya routes -- done
  The logo is expensive to load, move to CDN when deploying
  !Important: All pages would be reviewed for accessibility
  !Important: Use Create browser history. withRouter does not push history
*/
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/welcome/Login';
// Import our fallback
import PageFallBack from './components/Fallbacks/fallback';
// import { HOME, REGISTER, LOGIN, DASHBOARD, ABOUT } from "./routes/router"; // No need for import for string objects
// import Home from './components/welcome/Home' // No need for a link to main page. Use icon instead or browser history
// import Register from './components/welcome/Register' // Lazy load this component instead. ,ight not be used by users
const Register = lazy(() => import('./components/welcome/Register'));
// import Dashboard from './components/welcome/Dashboard' // Lazy load this component also. Not needed till login
const Dashboard = lazy(() => import('./components/DashBoard/DashBoard'));
// import About from './components/welcome/About' // Lazy load this also, smae reason as above.
const About  = lazy(() => import('./components/welcome/About'));

/* All this components shouldn't be in scope untill login. Remove and put in dashboard
// Components  Guide By Soyaya
import Product from "./components/ecommerce/Product";
import Cart from "./components/ecommerce/Cart";
import Agronetwork from "./components/agronetwork/AgroNetwork";
import Agrocomodity from "./components/Agrocomodity/Agrocomodity";
import Profile from "./components/profile/Profile";
import Timeline from "./components/social/Timeline";
// End
*/

const App = () => {
  return (
    <Router>
      <Suspense fallback={<PageFallBack />}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/about' component={About} />
          <Route path='/dashboard' component={Dashboard} />
          {/* Move to dashboard component
              <Route exact path='/' component={Timeline} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Product" component={Product} />
              <Route path="/Agronetwork" component={Agronetwork} />
              <Route path="/Agrocomodity" component={Agrocomodity} />
              <Route path="/Profile" component={Profile} />
          */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
