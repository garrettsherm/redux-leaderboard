import React, { Component } from 'react';

class Leaderboard extends Component {
	render(){
		return(
			<div>
				<h4>Leaderboard</h4>
				<pre>
					{JSON.stringify(this.props)}
				</pre>
			</div>
		);
	}
}

export default Leaderboard;