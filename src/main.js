import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeaderboardList from './components/LeaderboardList';
import './App.sass';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div>
		    <LeaderboardList 
		        allTimeApiUrl="https://fcctop100.herokuapp.com/api/fccusers/top/alltime" 
		        recentApiUrl="https://fcctop100.herokuapp.com/api/fccusers/top/recent"
		     />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('camper-leaderboard'));
