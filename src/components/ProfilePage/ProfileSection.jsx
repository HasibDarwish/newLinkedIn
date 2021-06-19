

import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import Profile from './Profile.jsx'

export class ProfileBody extends Component {
	state = {
		profile: "",
	};

	getprofile = async () => {
		const request = await fetch(
			"https://striveschool-api.herokuapp.com/api/profile/me",
			{
				method: "GET",
				headers: {
					Authorization: process.env.REACT_APP_TOKEN,
				},
			}
		);
		if (request.ok) {
			const payload = await request.json();
            this.setState({ profile: payload });
            console.log(payload);
		}
        // console.log(process.env.REACT_APP_TOKEN);
	};

	componentDidMount() {
		this.getprofile();
	}

	render() {
		return (
			<div>
                <Profile profile={this.state.profile} upd/>
                




			</div>
		);
	}
}

export default withRouter(ProfileBody);