import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from'../../InfoData/InfoData.json'
import InfoDetail from '../InfoDetail/InfoDetail';
const Info = () => {
    
    
     return (
        <div className="container">
           
           <div className="row">
              {
                  data.map(Info => <InfoDetail Infodata ={Info}></InfoDetail>)
              } 
           </div>
        </div>
    );
};

export default Info;