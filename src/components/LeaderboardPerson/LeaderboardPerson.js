import React, { Component } from 'react';

class LeaderboardPerson extends Component {
	render(){
		return(
			<div><strong>{this.props.person.user}:</strong> {this.props.person.score}</div>
		);
	}
}

export default LeaderboardPerson;