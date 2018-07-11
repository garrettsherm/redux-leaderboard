import React, { Component } from 'react';

class LeaderboardPerson extends Component {
	render(){
		return(
			<div>{this.props.person.user}: {this.props.person.score}</div>
		);
	}
}

export default LeaderboardPerson;