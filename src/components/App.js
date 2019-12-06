import React, { Component } from 'react';
import { connect } from '~/core/redux';
import {
	HashRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from './../routes/home';
import About from './../routes/About';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</nav>

					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default connect(App);
