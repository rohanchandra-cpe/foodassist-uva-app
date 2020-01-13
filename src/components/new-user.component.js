import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export default class NewUser extends Component {
	constructor(props){
		super(props);

		this.onChangeOrgName = this.onChangeOrgName.bind(this);
		this.onChangeContactName = this.onChangeContactName.bind(this);
		this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
		this.onChangeContactPhoneNumber = this.onChangeContactPhoneNumber.bind(this);
		this.onChangeContactPassword = this.onChangeContactPassword.bind(this);
		this.onChangeContactRePassword = this.onChangeContactRePassword.bind(this);
		this.state = {
			org_name: '',
			contact_name: '',
			contact_email: '',
			contact_phone_number: '',
			contact_password: '',
			contact_reenter_password: ''
		}
	}
	onChangeOrgName(e) {
		this.setState({
			org_name: e.target.value
		});
	}
	onChangeContactName(e) {
		this.setState({
			contact_name: e.target.value
		});
	}
	onChangeContactEmail(e) {
		this.setState({
			contact_email: e.target.value
		});
	}
	onChangeContactPhoneNumber(e) {
		this.setState({
			contact_phone_number: e.target.value
		});
	}
	onChangeContactPassword(e) {
		this.setState({
			contact_password: e.target.value
		});
	}
	onChangeContactRePassword(e) {
		this.setState({
			contact_reenter_password: e.target.value
		});
	}
	onSubmit(e) { //Here is where I have to check if the passwords are the same
		e.preventDefault();
		console.log(`New User Registered`);

		if(!(this.state.contact_password.equals(this.state.contact_reenter_password))){
			//Error! Make sure they equal. Maybe some nice bootstrap stuff
			//I could also do a length check
		}
		else{
			const newUser = {
				org_name: this.state.org_name,
				contact_name: this.state.contact_name,
				contact_email: this.state.contact_email,
				contact_phone_number: this.state.contact_phone_number,
				contact_password: this.state.contact_password,
				contact_reenter_password: this.state.contact_reenter_password
			};
			//Then we would axios post
			this.setState = ({
				org_name: '',
				contact_name: '',
				contact_email: '',
				contact_phone_number: '',
				contact_password: '',
				contact_reenter_password: ''
			})
		}
		
	}

	render() {
		return (
			<div>
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
			</div>
		);
	}
}

