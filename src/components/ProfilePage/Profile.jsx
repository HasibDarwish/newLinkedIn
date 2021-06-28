import {Component} from "react";
import {Container, Row, Col, Button, Dropdown} from "react-bootstrap";
import PencilIcon from "../UseableComponents/Pencil.jsx";
import CarouselBadge from "../UseableComponents/Carousel.jsx";
import ProfileImageUpdateModal from "./ProfileImgUpdateModal";
import EditProfile from "./ProfileEditModal.jsx";

export default class ProfileTop extends Component {
	state = {
		profileImageModal: false,
		profileEditModal: false,
	};

	render() {
		const profile = this.props.data;
		const render = this.props.render;
		return (
			<>
				
				{profile && (
					<Container>
						<div class="alert alert-light" role="alert">
							<Row className="m-0 p-1 Profile">
								<Col id="ProfileBackground" sx={12}>
									<img
										id="profileImage"
										src={profile.image}
										alt="profile_image"
										onClick={() => this.setState({profileImageModal: true})}
									/>
									
									<ProfileImageUpdateModal
										modal={this.state.profileImageModal}
										hideImageModal={() =>
											this.setState({profileImageModal: false})
										}
										profile={profile}
										render={() => render()}
									/>
									<PencilIcon
										classname={"Pencil"}
										editProfileOn={() =>
											this.setState({profileEditModal: true})
										}
									/>
									// profile edit modal section
									<EditProfile
										modal={this.state.profileEditModal}
										render={() => render()}
										hideProfileEditModal={() =>
											this.setState({profileEditModal: false})
										}
									/>
								</Col>
								
								<Col id="ProfileInfo" xs={12}>
									<h3>
										{profile.name} {profile.surname}
									</h3>
									<h5 style={{fontWeight: "400"}}>{profile.title}</h5>
									<p className="d-flex align-items-center">
										<span style={{fontSize: "16px"}} className="me-2">
											{profile.area}
										</span>

										<button
											className="btn p-0 me-2"
											style={{fontWeight: "bold"}}
										>
											500 connections
										</button>
										<button className="btn p-0" style={{fontWeight: "bold"}}>
											Contact info
										</button>
									</p>
									<span className="d-flex flex-row">
										<Button
											style={{
												borderRadius: "50px",
												marginRight: "10px",
											}}
											variant="primary"
										>
											Open to
										</Button>
										<Dropdown>
											<Dropdown.Toggle
												style={{
													borderRadius: "50px",
													marginRight: "10px",
												}}
												variant="outline-dark"
												id="dropdown-basic"
												border="dark"
											>
												{"Add profile section"}
											</Dropdown.Toggle>
										</Dropdown>
										<Button
											style={{borderRadius: "50px"}}
											variant="outline-dark"
										>
											More...
										</Button>
									</span>
									<Row>
										<CarouselBadge />
									</Row>
								</Col>
							</Row>
						</div>
					</Container>
				)}
			</>
		);
	}
}
