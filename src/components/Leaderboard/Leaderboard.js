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
				<h1>Leaderboard</h1>
					<table key="sortedLeaderboard" className="table">
						<thead>
							<th scope="col">#</th>
							<th scope="col">Name</th>
							<th scope="col">Score</th>
						</thead>
						<tbody>
						{
							sortedLeaderboard.map((person, i) => 
								<tr>
									<th scope="row">{i + 1}</th>
									<td>{person.user}</td>
									<td>{person.score}</td>
								</tr>
							)
						}
						</tbody>
					</table>
			</div>
		);
	}
}

export default Leaderboard;