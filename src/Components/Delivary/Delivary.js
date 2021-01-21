import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Delivary.css'

const Delivary = () => {


  return (

    <Container>
      <Row className="justify-content-md-between">
        <Col md={4}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control className="input" type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control className="input" type="Name" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="formBasicaddress">
              <Form.Label>address</Form.Label>
              <Form.Control className="input address" type="address" placeholder="Line 1" />
            </Form.Group>
            <Form.Group controlId="formBasicaddress">
              <Form.Label>address</Form.Label>
              <Form.Control className="input address" type="address" placeholder="Line 2" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>

          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
      </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
      </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
          </Card>
        </Col>
      </Row>
    </Container>




  );
};

export default Delivary;