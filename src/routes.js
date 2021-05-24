import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
