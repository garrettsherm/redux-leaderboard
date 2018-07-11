import React, { Component } from 'react';

class EditScore extends Component {

	state = {
		addMinusScore: ''
	}

	compareUserNames(person1, person2){
		if(person1.user > person2.user) return 1;
		if(person1.user < person2.user) return -1;
		return 0;
	}

	changeAddMinusScore(e){
		this.setState({addMinusScore: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.userName.value, e.target.changeScore.value);
		this.props.changeUserScore(e.target.userName.value, e.target.changeScore.value);
		this.setState({addMinusScore: ''});
	}

	render(){
		const sortedUserNames = this.props.leaderboard.sort(this.compareUserNames);
		return(
			<div>
				<h4>Add/Minus from User Score</h4>
				<form onSubmit={this.handleSubmit}>
					<select name="userName">
						{
							sortedUserNames.map(user => 
								<option key={user.user} value={user.user}>{user.user}</option>
							)
						}
					</select>
					<input name="changeScore" value={this.state.addMinusScore} onChange={this.changeAddMinusScore.bind(this)} />
					<input type="submit" value="Add/Minus from user score" />
				</form>
			</div>
		);
	}
}

export default EditScore;