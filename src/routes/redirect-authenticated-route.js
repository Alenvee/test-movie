import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';

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

export default RedirectAuthenticatedRoute;