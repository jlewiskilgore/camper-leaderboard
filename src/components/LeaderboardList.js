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
				this.setState({
					recentLeaders: response.data
				});
		}.bind(this));
	}

	getAllTimeLeaders() {
		axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
			.then(function(response) {
				console.log("ALLTIME");
				console.log(response.data);
				this.setState({
					allTimeLeaders: response.data
				});
		}.bind(this));
	}

	componentDidMount() {
		this.getRecentLeaders();
		this.getAllTimeLeaders();
	}

	render() {
		return (
		  <table>
		  	<thead>
		  	  <tr>
		  	    <th>USERNAME</th>
		  	    <th>ALLTIME POINTS</th>
		  	    <th>RECENT POINTS</th>
		  	  </tr>
		  	</thead>
		    <tbody>
		    {
		      this.state.recentLeaders.map(function(leader) {
		      	return (
		      	  <LeaderboardDetail
		      	    leader={leader} />
		      	)
		      }.bind(this))
		    }
		    </tbody>
		  </table>
		)
	}
}

export default LeaderboardList;
