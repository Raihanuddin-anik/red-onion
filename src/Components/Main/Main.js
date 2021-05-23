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
          
          <div style={{textAlign:'center',marginTop:"20px"}}>
                <b className={category === 'Breakfast' ? 'text-danger text-decoration-underline m-5 fs-5' :  'text-muted m-5'} style={{cursor: 'pointer'}} onClick={()=> setCategory('Breakfast')}>Breakfast</b>
                <b className={category === 'Lunch' ? 'text-danger text-decoration-underline m-5 fs-5' : 'text-muted m-5'} style={{cursor: 'pointer'}} onClick={()=> setCategory('Lunch')}>Lunch</b>
                <b className={category === 'Dinner' ? 'text-danger text-decoration-underline m-5 fs-5' : 'text-muted m-5'} onClick={()=> setCategory('Dinner')}>Dinner</b>
          </div>
               
         
           <div className="row foodData">
              
             
                {
                    allData.map(data => <Section data={data}></Section>)
                }
              
           </div>
           <div style={{textAlign:'center',marginBottom:"20px",marginTop:"20px"}} >
                 <Button 
                 
                  >CheckOut Food</Button>
            </div>
     </Container>
    );
};

export default Main;