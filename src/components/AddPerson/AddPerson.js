import React, { Component } from 'react';

class AddPerson extends Component {


	state = {
		userTaken: false,
		userValue: ""
	}

	handleSubmit = (e) => {
		e.preventDefault();

		if(!this.state.userTaken){
			this.props.addUserToLeaderboard(e.target.newUser.value, e.target.newUserScore.value);
		}
		e.target.reset();
		this.setState({
			userValue: '',
			userTaken: false
		});
	}

	checkDuplicateUser = (e) => {
		console.log('checking for duplicate');
		this.setState({userValue: e.target.value})

		let userExists = false;
		this.props.leaderboard.map(user => {if(user.user === e.target.value){userExists = true;} return userExists;})

		if(userExists){
			this.setState({userTaken: true});
		}else{
			this.setState({userTaken: false});
		}
	}

	render(){
		return(
			<div>
				<h4>Add Person Form</h4>
				<form onSubmit={this.handleSubmit} >
					<label>New user name</label>
					<input type="text" name="newUser" value={this.state.userValue} onChange={this.checkDuplicateUser}/>
					<label>Starting score for new user</label>
					<input type="text" name="newUserScore" />
					<input type="submit" value="Add user" />
				</form>
				{this.state.userTaken && <p>user already exists</p>}
			</div>
		);
	}
}

export default AddPerson;