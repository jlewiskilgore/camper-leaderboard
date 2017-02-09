import React, { Component } from 'react';
import LeaderboardDetail from './LeaderboardDetail';
import axios from 'axios';

class LeaderboardList extends Component {
	constructor(props) {
		super(props);

		this.state = { leaders: [], recentOrder: "Descending", allTimeOrder: "Descending" };

		this.sortRecentPointsColumn = this.sortRecentPointsColumn.bind(this);
		this.sortAllTimePointsColumn = this.sortAllTimePointsColumn.bind(this);
	}

	getRecentLeaders() {
		axios.get(this.props.recentApiUrl)
			.then(function(response) {
				console.log("RECENT");
				console.log(response.data);
				this.setState({
					leaders: response.data
				});
		}.bind(this));
	}

	getAllTimeLeaders() {
		axios.get(this.props.allTimeApiUrl)
			.then(function(response) {
				console.log("ALLTIME");
				console.log(response.data);
				this.setState({
					leaders: response.data
				});
		}.bind(this));
	}

	componentDidMount() {
		this.getRecentLeaders();
		//this.getAllTimeLeaders();
	}

	sortRecentPointsColumn() {
		console.log("sort recent points");
		// Check current state then toggle to other
		if(this.state.recentOrder == "Ascending") {
			// Sort by descending then change state
			this.state.leaders.sort(function(a,b) {
				return b.recent - a.recent;
			})
			this.setState({ recentOrder: "Descending" });
		}
		else if(this.state.recentOrder == "Descending") {
			// Sort by ascending then change state
			this.state.leaders.sort(function(a,b) {
				return a.recent - b.recent;
			})
			this.setState({ recentOrder: "Ascending" });
		}
	}

	sortAllTimePointsColumn() {
		console.log("sort all time points");
		// Check current state then toggle to other
		if(this.state.allTimeOrder == "Ascending") {
			// Sort by descending then change state
			this.state.leaders.sort(function(a,b) {
				return b.alltime - a.alltime;
			})
			this.setState({ allTimeOrder: "Descending" });
		}
		else if(this.state.allTimeOrder == "Descending") {
			// Sort by ascending then change state
			this.state.leaders.sort(function(a,b) {
				return a.alltime - b.alltime;
			})
			this.setState({ allTimeOrder: "Ascending" });
		}
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
		      this.state.leaders.map(function(leader) {
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
