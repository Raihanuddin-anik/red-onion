import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Section.css'

const Section = (props) => {
    const { Price, picture, name, title1, key } = props.data;
  

    return (
       
         <div className="col-md-4 col-6 p-2">
           <Link to = {"/details/"+key}> <div className="item">
             
                 <img src={picture} alt=""/>
            
                <h4>{name}</h4>
                <p>{title1}</p>
                <p>{Price}</p>
             
             </div> </Link>
            

         </div>
    
         
            
        
    );
};

export default Section;