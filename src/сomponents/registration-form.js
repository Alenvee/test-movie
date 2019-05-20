import React, { Component } from 'react';
import { observable, action } from 'mobx';

class RegistrationForm extends Component {

    @observable email = '';

    @observable password = '';

    @action setField = (event) => {
        this[event.target.name] = event.target.value;
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <input
                        pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                        required
                        type="email"
                        name="email"
                        onChange={this.setField}/>
                    <input
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$"
                        type="password"
                        required
                        name="password"
                        onChange={this.setField}/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;