import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Link
import Admin from './admin';
import Home from './home';
import MyAccount from '../components/MyAccount/index'
import Main from '../components/Main';
import SellNow from './sell-now';
import RouteWithSubRoutes from './utils';

const routes = [
  {
    path: '/admin',
    component: Admin,
  },
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/vendez-maintenant',
        component: SellNow,
      },
      {
        path: '/mon-compte',
        component: MyAccount,
      },
    ],
  },
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
