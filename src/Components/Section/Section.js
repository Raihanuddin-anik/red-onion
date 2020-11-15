import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Section.css'

const Section = (props) => {
    const { Price, picture, name, title, key } = props.data;

    return (
     <div className="col-md-4 item">
        
            <Card >
                <Card.Img variant="top" src={picture}/>
                <Card.Body>
                    <Card.Title>Card title that wraps to a new line</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
              
             </Card>
        
    </div>
        
            
        
    );
};

export default Section;