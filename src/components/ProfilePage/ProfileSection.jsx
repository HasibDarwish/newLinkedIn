import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Profile from "./Profile.jsx";

export class ProfileBody extends Component {
	render() {
		const data = this.props.data;
		const render= this.props.render
		return <Profile data={data} render={() => render()} />;
	}
}

export default withRouter(ProfileBody);
