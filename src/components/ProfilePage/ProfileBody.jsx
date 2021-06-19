import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class ProfileBody extends Component {
  render() {
    return (
      <div>
        <Container className="ProfileGrid">
          <Row className="row">
            <Col md={8}>
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
