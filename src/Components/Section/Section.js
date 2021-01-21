import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Section.css'

const Section = (props) => {
    const { Price, picture, name, title, key } = props.data;
  

    return (
       
         <Col md={4}>
           <Link to = {"/details/"+key}> <div className="item">
             
                 <img src={picture} alt=""/>
            
                <h4>{name}</h4>
                <p>{title}</p>
                <p>{Price}</p>
             
             </div> </Link>
            

         </Col>
    
         
            
        
    );
};

export default Section;