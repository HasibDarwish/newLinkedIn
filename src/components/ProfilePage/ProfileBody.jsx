import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProfileSection from "./ProfileSection";
import {GetRequest} from "../Utils/api.js";

const {REACT_APP_CLOUD_URL, REACT_APP_USER_ID} = process.env;
const endpoint = `${REACT_APP_CLOUD_URL}/api/profile/${REACT_APP_USER_ID}`;

export class ProfileBody extends Component {
	state = {
		data: null,
		render: false,
	};
	GetData = async () => {
		const data = await GetRequest(endpoint, "Could not fetch profile");
		this.setState({data});
	};
	componentDidMount() {
		this.GetData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.render !== this.state.render) {
			this.GetData();
		}
	}
	render() {
		return (
			<div>
				<Container className="ProfileGrid">
					<Row className="row">
						<Col md={8}>
							<ProfileSection
								data={this.state.data}
								render={() => this.setState({render: !this.state.render})}
							/>
							{/* PROFILE MAIN SECTION AND 
								COMPONENTS WITH EXPERIENCE AND 
								INFO ABOUT THE USER */}
						</Col>
						<Col md={4} lg={3} className=" my-sm-4 my-md-0 my-lg-0 ">
							{/* RIGHT SIDE HERE WITH OTHER USERS TO INTERACT WITH */}
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ProfileBody;
