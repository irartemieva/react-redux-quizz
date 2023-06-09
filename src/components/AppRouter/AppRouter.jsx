import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { routes } from '../../router';

const AppRouter = () => {
  return (
    <div className="Quizz">
      <Switch>
      {routes.map(route => 
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      )}
      <Redirect to='/' />
    </Switch>
    </div>
  );
}

export default AppRouter;
