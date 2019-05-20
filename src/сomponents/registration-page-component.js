import React from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react/index";
import RegistrationForm from '../сomponents/registration-form';


@inject('userStore')
@observer
class RegistrationPage extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
		const { email, password } = this;
		setTimeout(() => {
			localStorage.setItem('userCreds', JSON.stringify({email, password}));
			this.props.userStore.login();
		}, 2000)
	}

  render() {
    return (
      <React.Fragment>
        <p>Registration</p>
        <RegistrationForm onSubmit={this.onSubmit} />
        <p>Already have an account? <Link to="/login">Sign in</Link> </p>
      </React.Fragment>
    );
  }
}


export default RegistrationPage;