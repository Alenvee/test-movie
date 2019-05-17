import React from 'react';
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <React.Fragment>
            <p>login</p>
            <p>No account yet? <Link to="/registration">Sign up</Link></p>
        </React.Fragment>
    );
}

export default LoginPage;