import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';

const InfoDetail = (props) => {
    const { title, description, img, icon } = props.Infodata
    return (
       
            <Col md={4}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                           {description}
                        </Card.Text>
                        <p style={{color:"blue"}}>Go somewhere</p>
                    </Card.Body>
                </Card>
            </Col>
       
    );
};

export default InfoDetail;