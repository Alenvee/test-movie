import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import {  } from 'mobx-react';
import UserStore from './store/user-store';
import MainPage from './сomponents/main-page-component.js';
import LoginPage from './сomponents/login-page-component.js';
import MenuContainer from './сomponents/menu-component.js';
import RegistrationPage from './сomponents/registration-page-component';
import './App.css';

const userStore = new UserStore();

const WithMenuRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <React.Fragment>
                        <MenuContainer {...props}/>
                        <Component {...props} />
                    </React.Fragment>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />)
}

const RedirectAuthenticatedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Redirect
                        to={{
                            pathname: "/",
                        }}
                    />
                ) : (
                    <React.Fragment>
                        <Component {...props} />
                    </React.Fragment>
                )
            }
        />)
}

function App() {
  return (
      <Router>
          <Provider userStore = {userStore}>
              <div className="App">
                  <Switch>
                      <WithMenuRoute exact path="/" component={MainPage} />
                      <RedirectAuthenticatedRoute path="/login" component={LoginPage} />
                      <RedirectAuthenticatedRoute path="/registration" component={RegistrationPage} />
                      <Route component={() => <div>404</div>} />
                  </Switch>
              </div>
          </Provider>
      </Router>
  );
}

export default App;
