import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';

const InfoDetail = (props) => {
    const { title, description, img, icon } = props.Infodata
    return (
       
            <div className="col-lg-4 align-item-center col-md-6 col-12">
               
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                           {description}
                        </Card.Text>
                        <p style={{color:"blue"}}>Go somewhere</p>
                    </Card.Body>
              
            </div>
       
    );
};

export default InfoDetail;