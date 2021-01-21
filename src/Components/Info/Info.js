import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import data from'../../InfoData/InfoData.json'
import InfoDetail from '../InfoDetail/InfoDetail';
const Info = () => {
    
    
     return (
        <Container>
           
           <Row>
              {
                  data.map(Info => <InfoDetail Infodata ={Info}></InfoDetail>)
              } 
           </Row>
        </Container>
    );
};

export default Info;