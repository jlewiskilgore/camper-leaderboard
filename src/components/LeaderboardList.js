import React, { Component } from 'react';
import LeaderboardDetail from './LeaderboardDetail';

class LeaderboardList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="camper-leaderboard">
			  <p>Camper Leaderboard List</p>
			  <LeaderboardDetail />
			  <LeaderboardDetail />
			  <LeaderboardDetail />
			</div>
		);
	}
}

export default LeaderboardList;
