import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HOME, REGISTER, LOGIN, DASHBOARD, ABOUT } from './routes/router'; 
import Welcome from './components/welcome/Welcome';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Welcome} />
        <Route path={REGISTER} component={} />
        <Route path={LOGIN} component={} />
        <Route path={DASHBOARD} component={} />
        <Route path={ABOUT} component={} />
      </Switch>
    </Router>
  );
}

export default App;
