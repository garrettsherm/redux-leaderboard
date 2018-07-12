import React, { Component } from 'react';

class RemovePerson extends Component {

	handleSubmit = (e) => {
		e.preventDefault();

		let removeIndex = NaN;
		this.props.leaderboard.forEach((person, i) => {
			if(person.user === e.target.userName.value){
				removeIndex = i
				console.log(removeIndex);
			}
		});		
		if(!isNaN(removeIndex)){
			this.props.removeUserFromLeaderboard(e.target.userName.value, removeIndex);
		}
	}

	render(){
		const sortedUserNames = this.props.leaderboard.sort(this.compareUserNames);
		return(
			<div>
				<h4>Remove Person from Leaderboard</h4>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<select name="userName" className="form-control">
							{
								sortedUserNames.map(user => 
									<option key={user.user} value={user.user}>{user.user}</option>
								)
							}
						</select>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">Remove Player From Leaderboard</button>
					</div>
				</form>
				{this.props.leaderboard.length === 0 && <p className="text-danger">No users to remove</p>}
			</div>
		);
	}
}

export default RemovePerson;