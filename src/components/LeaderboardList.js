import React, { Component } from 'react';
import LeaderboardDetail from './LeaderboardDetail';
import axios from 'axios';

class LeaderboardList extends Component {
	constructor(props) {
		super(props);

		this.state = { recentLeaders: [], allTimeLeaders: [] };
	}

	getRecentLeaders() {
		axios.get(this.props.recentApiUrl)
			.then(function(response) {
				console.log("RECENT");
				console.log(response.data);
				this.setState({
					recentLeaders: response.data
				});
		}.bind(this));
	}

	getAllTimeLeaders() {
		axios.get(this.props.allTimeApiUrl)
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
