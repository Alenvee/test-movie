import React from 'react';
import { Link } from "react-router-dom";


function RegistrationPage() {
    const createUser = () => {
        localStorage.setItem('isAuthenticated', true)
    };

    return (
        <React.Fragment>
            <p>Registration</p>
            <button onClick={createUser}>Add user</button>
            <p>Already have an account? <Link to="/login">Sign in</Link> </p>
        </React.Fragment>
    );
}

export default RegistrationPage;