import React, { Component } from 'react';

class EditScore extends Component {

	state = {
		addMinusScore: '',
		scoreNaN: true
	}

	compareUserNames(person1, person2){
		if(person1.user > person2.user) return 1;
		if(person1.user < person2.user) return -1;
		return 0;
	}

	changeAddMinusScore(e){
		const testNumber = parseFloat(e.target.value, 10);
		if(!isNaN(testNumber)){
			this.setState({scoreNaN: false});
		} else {
			this.setState({scoreNaN: true});
		}
		this.setState({addMinusScore: e.target.value});

	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.userName.value, e.target.changeScore.value);

		let editIndex = NaN;
		this.props.leaderboard.forEach((person, i) => {
			if(person.user === e.target.userName.value){
				editIndex = i
				let testNewScore = this.props.leaderboard[editIndex].score + parseFloat(e.target.changeScore.value, 10);
				if(!isNaN(testNewScore)){
					this.props.changeUserScore(e.target.userName.value, testNewScore, editIndex);
				}
			}
		});
		this.setState({addMinusScore: '', scoreNaN: true});
		e.target.reset();
	}

	render(){
		const sortedUserNames = this.props.leaderboard.sort(this.compareUserNames);
		return(
			<div>
				<h4>Add/Minus from User Score</h4>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<select name="userName" className="form-control">
							{
								sortedUserNames.map(user => 
									<option key={user.user} value={user.user}>{user.user}</option>
								)
							}
						</select>
						{this.props.leaderboard.length === 0 && <p className="text-danger">No users to edit</p>}

					</div>
					<div className="form-group">
						<input name="changeScore" value={this.state.addMinusScore} onChange={this.changeAddMinusScore.bind(this)} className="form-control"/>
						{this.state.scoreNaN && <p className="text-danger">Add/minus from score is not a number</p>}
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">Add/Minus from user score</button>
					</div>
				</form>
			</div>
		);
	}
}

export default EditScore;