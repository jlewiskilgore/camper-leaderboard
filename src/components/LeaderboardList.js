import React, { Component } from 'react';
import LeaderboardDetail from './LeaderboardDetail';
import axios from 'axios';

class LeaderboardList extends Component {
	constructor(props) {
		super(props);

		this.state = { recentLeaders: [], allTimeLeaders: [] };

		this.sortRecentPointsColumn = this.sortRecentPointsColumn.bind(this);
		this.sortAllTimePointsColumn = this.sortAllTimePointsColumn.bind(this);
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

	sortRecentPointsColumn() {
		console.log("sort recent points");
	}

	sortAllTimePointsColumn() {
		console.log("sort all time points");
	}

	render() {
		return (
		  <table>
		  	<thead>
		  	  <tr>
		  	    <th>USERNAME</th>
		  	    <th onClick={this.sortAllTimePointsColumn}>ALLTIME POINTS</th>
		  	    <th onClick={this.sortRecentPointsColumn}>RECENT POINTS</th>
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
