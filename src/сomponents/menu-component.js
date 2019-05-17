import React from 'react';

function MenuContainer() {
    const singOut = () => {
        localStorage.setItem('isAuthenticated', false)
    };
    return (
        <React.Fragment>
            <p>menu</p>
            <button onClick={singOut}>Sing Out</button>
        </React.Fragment>
    );
}

export default MenuContainer;