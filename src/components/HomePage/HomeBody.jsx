import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

export class HomeBody extends Component {
  render() {
    return (
      <Container className="mainContainer ">
        <Row>
          <Col md={2}>{/* LITTLE PROFILE HERE */}</Col>
          <Col md={7}>{/* POST SECTION HERE */}</Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    );
  }
}

export default HomeBody;
