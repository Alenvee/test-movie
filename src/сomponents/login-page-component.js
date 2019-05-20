import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import LoginForm from '../сomponents/login-form';

@observer
class LoginPage extends Component {

  @observable isErrorLogin = false;

  onSubmit = (event) => {
    debugger;
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
		const { userEmail, userPassword } = JSON.parse(localStorage.getItem('userCreds'));
		if (email === userEmail && password === userPassword) {
      setTimeout(() => {
        this.props.userStore.login();
      }, 2000)
    } else {
      this.isErrorLogin = true
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <p>login</p>
        <LoginForm onSubmit={this.onSubmit}/>
        <p>No account yet? <Link to="/registration">Sign up</Link></p>
        {this.isErrorLogin && <div>You don't have account</div>}
      </React.Fragment>
    );
  }
}


export default LoginPage;