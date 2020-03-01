import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Link

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


export default RouteWithSubRoutes;
