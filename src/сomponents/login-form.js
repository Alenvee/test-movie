import React, { Component } from 'react';
import { observable, action } from 'mobx';

class LoginForm extends Component {

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
						type="email"
						name="email"
						onChange={this.setField}/>
					<input
						type="password"
						name="password"
						onChange={this.setField}/>
					<button>Send</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;