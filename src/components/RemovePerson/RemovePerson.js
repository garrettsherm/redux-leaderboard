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
					<select name="userName">
						{
							sortedUserNames.map(user => 
								<option key={user.user} value={user.user}>{user.user}</option>
							)
						}
					</select>
					<input type="submit" value="Remove Player From Leaderboard" />
				</form>
			</div>
		);
	}
}

export default RemovePerson;