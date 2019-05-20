import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, inject, observer } from 'mobx-react';
import { toJS } from 'mobx'
import UserStore from './store/user-store';
import MainPage from './сomponents/main-page-component.js';
import LoginPage from './сomponents/login-page-component.js';
import MenuContainer from './сomponents/menu-component.js';
import RegistrationPage from './сomponents/registration-page-component';
import './App.css';

const userStore = new UserStore();

@inject('userStore')
@observer
class WithMenuRoute extends React.Component {

    componentDidMount() {
        this.props.userStore.getAuthToken()
    }

    render() {
        const { component: Component, userStore, ...rest } = this.props;
        const userExists = userStore.isAuthentificated;
        return (
            <Route
                {...rest}
                render={props =>
                    userExists ? (
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
            />
        )
    }
}

@inject('userStore')
@observer
class RedirectAuthenticatedRoute extends React.Component {
    componentDidMount() {
        this.props.userStore.getAuthToken()
    }

    render() {
        const { component: Component, userStore, ...rest } = this.props;
        const userExists = userStore.isAuthentificated;
        return (
            <Route
                {...rest}
                render={props =>
                    userExists ? (
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
            />
        )
    }
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
