import {Button, Modal} from "react-bootstrap";
import React, {Component} from "react";
import {PostImageRequest} from "../Utils/api.js";

const {REACT_APP_CLOUD_URL, REACT_APP_USER_ID} = process.env;
const endpoint = `${REACT_APP_CLOUD_URL}/api/profile/${REACT_APP_USER_ID}/picture`;

class ProfileImgUpdateModal extends Component {
	state = {
		profileImage: "",
		formData: {},
	};

	showImageOnUpload = (e) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			this.setState({profileImage: reader.result});
		};
		reader.readAsDataURL(e.target.files[0]);
	};

	handleFileUpload = (e) => {
		e.preventDefault();
		this.showImageOnUpload(e);
		const file = e.currentTarget.files[0];
		let form_data = new FormData();
		form_data.append("profile", file);
		this.setState((state) => {
			return {
				formData: form_data,
			};
		});
	};

	uploadProfileImage = async () => {
		const request = await PostImageRequest(endpoint, this.state.formData);
		if (request.ok) {
			alert("Profile Image Updated Successfully");
			this.props.hideImageModal();
			this.props.render();
		} else {
			alert("Could not update profile image");
			this.props.hideImageModal();
			this.props.render();
		}
	};

	render() {
		const {modal, hideImageModal, profile} = this.props;
		return (
			<>
				<Modal show={modal} onHide={() => hideImageModal()}>
					<Modal.Header closeButton>
						<Modal.Title>Update Profile Picture</Modal.Title>
					</Modal.Header>
					<Modal.Body className="d-flex justify-content-center align-items-center flex-column">
						<div>
							<img
								src={
									this.state?.profileImage
										? this.state.profileImage
										: profile?.image
								}
								alt="profileImage"
								height="400"
								width="400"
								style={{borderRadius:"50%"}}
							/>
						</div>
						<input
							type="file"
							id="myfile"
							name="myfile"
							className="mt-1"
							accept="image/jpeg, image/png"
							onChange={this.handleFileUpload}
						></input>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => hideImageModal()}>
							Close
						</Button>
						<Button variant="primary" onClick={() => this.uploadProfileImage()}>
							Update
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default ProfileImgUpdateModal;
