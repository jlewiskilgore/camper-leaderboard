import React, { Component } from 'react';
import LeaderboardDetail from './LeaderboardDetail';
import axios from 'axios';

class LeaderboardList extends Component {
	constructor(props) {
		super(props);

		this.state = { leaders: [], recentOrder: "Descending", allTimeOrder: "Descending", leaderboardType: "Recent Leaders" };

		this.sortRecentPointsColumn = this.sortRecentPointsColumn.bind(this);
		this.sortAllTimePointsColumn = this.sortAllTimePointsColumn.bind(this);
		this.changeLeaderboardType = this.changeLeaderboardType.bind(this);
	}

	getRecentLeaders() {
		axios.get(this.props.recentApiUrl)
			.then(function(response) {
				this.setState({
					leaders: response.data
				});
		}.bind(this));
	}

	getAllTimeLeaders() {
		axios.get(this.props.allTimeApiUrl)
			.then(function(response) {
				this.setState({
					leaders: response.data
				});
		}.bind(this));
	}

	componentDidMount() {
		this.getRecentLeaders();
	}

	changeLeaderboardType() {
		// If current "recent", then show "alltime"
		if(this.state.leaderboardType == "Recent Leaders") {
			this.getAllTimeLeaders();

			this.setState({ leaderboardType: "All Time Leaders" });
		}
		// Else show "recent"
		else {
			this.getRecentLeaders();

			this.setState({ leaderboardType: "Recent Leaders" });
		}
	}

	sortRecentPointsColumn() {
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
		  <div>
		  	  <h2>{this.state.leaderboardType}</h2>
			  <button onClick={this.changeLeaderboardType}>Change Leaderboard Type</button>
			  <table className="table table-bordered">
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
		  </div>
		)
	}
}

export default LeaderboardList;
