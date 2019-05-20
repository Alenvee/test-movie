import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';
import MenuContainer from '../сomponents/menu-component';

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
              <MenuContainer {...props} />
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

export default WithMenuRoute;