import React, { Component } from 'react';
import LeaderboardPerson from '../LeaderboardPerson';

class Leaderboard extends Component {

	compareUsers(person1, person2){
		if(person1.score < person2.score){
			return 1;
		}
		if(person1.score > person2.score){
			return -1;
		}
		return 0;
	}

	render(){
		const sortedLeaderboard = this.props.leaderboard.sort(this.compareUsers);
		return(
			<div>
				<h4>Leaderboard</h4>
					<div key="sortedLeaderboard">
					{
						sortedLeaderboard.map((person, i) => <LeaderboardPerson key={i} person={person}/>)
					}
					</div>
					{JSON.stringify(sortedLeaderboard)}
			</div>
		);
	}
}

export default Leaderboard;