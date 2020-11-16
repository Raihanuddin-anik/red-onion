import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Section.css'

const Section = (props) => {
    const { Price, picture, name, title, key } = props.data;

    return (
       
         <Col md={4}>
            <div className="item">
             
                 <img src={picture} alt=""/>
            
                <h4>{name}</h4>
                <p>{title}</p>
                <p>{Price}</p>
             
             </div> 

         </Col>
    
         
            
        
    );
};

export default Section;