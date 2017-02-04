import React, { Component } from 'react';
import LeaderboardDetail from './LeaderboardDetail';
import axios from 'axios';

class LeaderboardList extends Component {
	constructor(props) {
		super(props);

		var recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
		var allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

		this.state = { recentLeaders: [], allTimeLeaders: [] };
	}

	getRecentLeaders() {
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
			.then(function(response) {
				console.log("RECENT");
				console.log(response.data);
		});
	}

	getAllTimeLeaders() {
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
			.then(function(response) {
				console.log("ALLTIME");
				console.log(response.data);
		});
	}

	componentDidMount() {
		this.getRecentLeaders();
		this.getAllTimeLeaders();
	}

	render() {
		return (
			<div className="camper-leaderboard">
			  <p>Camper Leaderboard List</p>
			  <p>{this.state.recentLeaders}</p>
			  <LeaderboardDetail />
			  <LeaderboardDetail />
			  <LeaderboardDetail />
			</div>
		);
	}
}

export default LeaderboardList;
