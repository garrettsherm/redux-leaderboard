import React, { Component } from 'react';

class AddPerson extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.newUser.value);
		console.log(e.target.newUserScore.value);
		this.props.addUserToLeaderboard(e.target.newUser.value, e.target.newUserScore.value);
	}

	render(){
		return(
			<div>
				<h4>Add Person Form</h4>
				<form onSubmit={this.handleSubmit} >
					<label>New user name</label>
					<input type="text" name="newUser" />
					<label>Starting score for new user</label>
					<input type="number" name="newUserScore" />
					<input type="submit" value="Add user" />
				</form>
			</div>
		);
	}
}

export default AddPerson;