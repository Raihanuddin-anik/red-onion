import React, { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import data from '../../data/data.json';
import './FoodDetail.css'
 


const FoodDetail = () => {
    const { Id } = useParams();
    const matchData = data.find(pd => pd.key == Id);
   
   

    const [count , setcount] = useState([1])
    
    const handleIncrease = () =>{
        
        const newCount = Object.keys({matchData}).length ;
        const TotalCount = newCount + count * 1;
         
       ;
        setcount(TotalCount)
    }
    const handleDecrease = () =>{
        
        const TotalCount = count - 1;
        if(TotalCount < 0){
            return 0
        }
        else{
            setcount(TotalCount)
        }   
    }

    return (
        <Container>
            <Row>
            <Col md={6}>
                <h2>{matchData.name}</h2>
                <p>
                    {matchData.title}.</p>
                     <div className="cart">
                        
                        { <span><button  onClick={()=>handleIncrease()}>+</button>  <h4>{count}</h4>
                         <button  onClick={()=>handleDecrease()}> - </button> </span>
                         }
                       
                
                     </div>
                    
                
                <br/>
                <br/>
               <Link to="/purshes"> <Button> Add Food</Button></Link>
                 
            </Col>

                 <Col md={6}><img src={matchData.picture} alt=""/></Col>
            </Row>
        </Container>
    );
};


export default FoodDetail;