import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Link
import Admin from './admin';
import Home from './home';

export default function AppRouter() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


