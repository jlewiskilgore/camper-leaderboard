import React, { Component } from 'react';

class LeaderboardDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			 <tr>
			 	<td>{this.props.leader.username}</td>
			 	<td>{this.props.leader.alltime}</td>
			 	<td>{this.props.leader.recent}</td>
			 </tr>
		);
	}
}

export default LeaderboardDetail;