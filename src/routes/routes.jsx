import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import Questionnaire from '../pages/Questionnaire';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/questionnaire" component={Questionnaire} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
