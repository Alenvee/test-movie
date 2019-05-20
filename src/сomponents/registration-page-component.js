import React from 'react';
import { Link } from "react-router-dom";
import {inject} from "mobx-react/index";


@inject('userStore')
class RegistrationPage extends React.Component {
     render() {
         return (
             <React.Fragment>
                 <p>Registration</p>
                 <button onClick={this.props.userStore.login}>Add user</button>
                 <p>Already have an account? <Link to="/login">Sign in</Link> </p>
             </React.Fragment>
         );
     }
}


export default RegistrationPage;