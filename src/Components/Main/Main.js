import React, { useEffect, useState,useContext, useReducer } from 'react';
import data from '../../data/data.json';
import Section from '../Section/Section';
import {Button, Container, Row} from 'react-bootstrap';

import './Main.css'


const Main = () => {
   
   
   

    const [allData, setallData] = useState([]);
    // console.log(allData);
     const [category,setCategory] = useState('Lunch');
    useEffect(()=> {
       const filterData =  data.filter(item => item.category === category)
       setallData(filterData);
    },[category])
   

    return (
     <Container>
          
          <div style={{textAlign:'center'}}>
                <Button className={category === 'Breakfast' ? 'active m-5' : 'm-5'} style={{cursor: 'pointer'}} onClick={()=> setCategory('Breakfast')}>Breakfast</Button>
                <Button className={category === 'Lunch' ? 'active m-5' : 'm-5'} style={{cursor: 'pointer'}} onClick={()=> setCategory('Lunch')}>Lunch</Button>
                <Button className={category === 'Dinner' ? 'active m-5' : 'm-5'} onClick={()=> setCategory('Dinner')}>Dinner</Button>
          </div>
               
         
           <Row className="foodData">
              
             
                {
                    allData.map(data => <Section data={data}></Section>)
                }
              
           </Row>
           <div style={{textAlign:'center'}} >
                 <Button 
                 
                  >CheckOut Food</Button>
            </div>
     </Container>
    );
};

export default Main;