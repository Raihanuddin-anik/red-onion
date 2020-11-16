import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import Section from '../Section/Section';
import {Container, Row} from 'react-bootstrap';
import './Main.css'

const Main = () => {
   
    const [allData, setallData] = useState(data);
    // console.log(allData);
     const [category,setCategory] = useState('Lunch');
    useEffect(()=> {
       const filterData =  allData.filter(item => item.category === category)
       setallData(filterData);
    },[category])
   

    return (
     <Container>
          
          <div style={{textAlign:'center'}}>
                <button onClick={()=> setCategory('Breakfast')}>Breakfast</button>
                <button onClick={()=> setCategory('Lunch')}>Lunch</button>
                <button onClick={()=> setCategory('Dinner')}>Dinner</button>
          </div>
               
         
           <Row className="foodData">
              
             
                {
                    allData.map(data => <Section data={data}></Section>)
                }
              
           </Row>
     </Container>
    );
};

export default Main;