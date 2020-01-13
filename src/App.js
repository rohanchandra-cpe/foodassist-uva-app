import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NewUser from "./components/new-user.component";

class App extends Component {
	render() {
		return (
			<Router>
			<div class = "container">
				<div class="jumbotron">
					<h1 class="display-3 text-center text-primary">New User Registration</h1>
				</div>
				<form>
					<div class="form-group">
						<label for="orgName" class="text-success">Organization Name</label>
						<div class = "col-xs-3">
							<input type="text" class="col-xs-3" placeholder="Organization Name"/>
						</div>
					</div>
					<div class="form-group">
						<label for="contactName" class="text-success">Contact Name</label>
						<div class = "col-xs-3">
							<input type="text" class="col-xs-3" placeholder="Enter Name"/>
						</div>
					</div>
					<div class="form-group">
						<label for="contactEmail" class="text-success">Contact Email</label>
						<div class = "col-xs-3">
							<input type="text" class="col-xs-3" placeholder="Enter Email"/>
						</div>
					</div>
					<div class="form-group">
						<label for="contactPhoneNumber" class="text-success">Contact Phone Number</label>
						<div class = "col-xs-3">
							<input type="text" class="col-xs-3" placeholder="Enter Phone Number"/>
						</div>
					</div>
					<div class="form-group">
						<label for="password" class="text-success">Password</label>
						<div class = "col-xs-3">
							<input type="password" class="col-xs-3" placeholder="Enter Password"/>
						</div>
					</div>
					<div class="form-group">
						<label for="password" class="text-success">Reenter Password</label>
						<div class = "col-xs-3">
							<input type="password" class="col-xs-3" placeholder="Reenter Password"/>
						</div>
					</div>
				</form>
				<button type="button" class="btn btn-outline-primary" type="submit">Register</button>
				<Route path="/adduser" component={NewUser} />
			</div>
			</Router>
		);
	}
}

export default App;
