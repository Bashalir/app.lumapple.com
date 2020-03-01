import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Link
import Admin from './admin';
import Home from './home';
import Main from '../components/Main';
import AddPosting from './add-posting';
import RouteWithSubRoutes from './utils';

const routes = [
  {
    path: "/admin2",
    component: Admin
  },
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/deposer-une-annonce",
        component: AddPosting
      }
    ]
  }
];



export default function AppRouter() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
      {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}


