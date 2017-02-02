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
		    <LeaderboardList />
		  </div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('container'));
