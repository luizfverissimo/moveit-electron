import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import UserPage from './pages/UserPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user' component={UserPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
