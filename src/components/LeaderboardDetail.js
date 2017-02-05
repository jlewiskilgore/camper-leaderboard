import React, { Component } from 'react';

class LeaderboardDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			 <p>{this.props.leader.username}</p>
		);
	}
}

export default LeaderboardDetail;