import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<form>
				<div class ="form-group">
					<label for="emailMessage" class="text-success">Email Address</label>
					<div class ="col-xs-4">
						<input type="email" class="col-xs-4" id="emailMessage"/>
					</div>
				</div>
				<div class = "form-group">
					<label for="emailMessage">Password</label>
					<div class="col-xs-4">
						<input type="password" class="col-xs-4" id="emailMessage"/>
					</div>
				</div>
			</form>
		);
	}
}

export default App;
