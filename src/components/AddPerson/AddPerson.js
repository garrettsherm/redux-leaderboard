import React, { Component } from 'react';

class AddPerson extends Component {


	state = {
		userTaken: false,
		userValue: "",
		scoreNaN: true
	}

	handleSubmit = (e) => {
		e.preventDefault();

		let testScore = parseFloat(e.target.newUserScore.value, 10);

		if(!this.state.userTaken && !isNaN(testScore)){
			this.props.addUserToLeaderboard(e.target.newUser.value, testScore);
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
	checkNaNScore = (e) => {
		let testScore = parseFloat(e.target.value, 10);
		if(isNaN(testScore)){
			this.setState({scoreNaN: true});
		} else {
			this.setState({scoreNaN: false});
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
					<input type="text" name="newUserScore" onChange={this.checkNaNScore} />
					<input type="submit" value="Add user" />
				</form>
				{this.state.userTaken && <p>user already exists</p>}
				{this.state.scoreNaN && <p>Intial user score is not a number</p>}
			</div>
		);
	}
}

export default AddPerson;