import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// routes
import RedirectAuthenticatedRoute from './redirect-authenticated-route';
import WithMenuRoute from './with-menu-router';
// components
import MainPage from '../сomponents/main-page-component.js';
import LoginPage from '../сomponents/login-page-component.js';
import RegistrationPage from '../сomponents/registration-page-component';
import MovieDetails from '../сomponents/movie-details';


export const Router = () => (
  <BrowserRouter>
    <Switch>
      <WithMenuRoute exact path="/" component={MainPage} />
      <RedirectAuthenticatedRoute path="/login" component={LoginPage} />
      <RedirectAuthenticatedRoute path="/registration" component={RegistrationPage} />
      <WithMenuRoute path="/desc:id" component={MovieDetails} />
      <Route component={() => <div>404</div>} />
    </Switch>
  </BrowserRouter>
)