import React, { Component } from 'react';

class AddPerson extends Component {


	state = {
		userTaken: true,
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
			userTaken: true,
			scoreNaN: true
		});
	}

	checkDuplicateUser = (e) => {
		console.log('checking for duplicate');
		this.setState({userValue: e.target.value})

		let userExists = false;
		this.props.leaderboard.map(user => {if(user.user === e.target.value){userExists = true;} return userExists;})

		if(userExists || e.target.value === ''){
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
					<div className="form-group">
						<label>New user name</label>
						<input type="text" name="newUser" value={this.state.userValue} onChange={this.checkDuplicateUser} className="form-control" />
					</div>
					<div className="form-group">
						<label>Starting score for new user</label>
						<input type="text" name="newUserScore" onChange={this.checkNaNScore} className="form-control" />
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">Add User to leaderboard</button>
					</div>
				</form>
				{this.state.userTaken && <p className="text-danger">user already exists</p>}
				{this.state.scoreNaN && <p className="text-danger">Intial user score is not a number</p>}
			</div>
		);
	}
}

export default AddPerson;