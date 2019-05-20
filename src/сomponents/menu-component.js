import React from 'react';
import { inject } from 'mobx-react';

@inject('userStore')
class MenuContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p>menu</p>
                <button onClick={this.props.userStore.logout}>Sing Out</button>
            </React.Fragment>
        );
    }
}

export default MenuContainer;