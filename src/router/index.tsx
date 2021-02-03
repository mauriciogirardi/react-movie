import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'page/Home';
import MovieDetail from 'page/MovieDetail';

const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/movie/:id" component={MovieDetail} />
  </Switch>
);

export default Router;
