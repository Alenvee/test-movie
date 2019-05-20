import React from 'react';
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('userStore')
class MenuContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to='/'>Home</Link>
                <button onClick={this.props.userStore.logout}>Sing Out</button>
            </React.Fragment>
        );
    }
}

export default MenuContainer;