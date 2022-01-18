// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/contact.css";

const Contact = (props) => {
  return (
    <div class='row mt-2'>
      <Container fluid className='form justify-content-top'>
        <Row>
          <Col xs='12'>
            <h4 className='text'>Feel free to tell us what you think!</h4>
          </Col>
          <Col xs='12'>
            <p className='text'>Email: pz723@nyu.edu</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
