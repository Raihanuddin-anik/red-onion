import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';




const Cart = ({ dt, cartData, removeProduct }) => {
   
       
    
    return (
        <div>
            <div style={{ width: '20rem', alignItems: "center" }}>
                
                <div style={{ backgroundColor: "rgb(245, 241, 241)", borderRadius: "10px" }} className="d-flex mt-2 p-2">
                    <div className="d-flex">
                        <img variant="top" src={dt.picture} />
                        <div className="p-2 ms-2">
                            <small>{dt.name}</small>
                            <br />
                            <b>{dt.price}$</b>
                           
                        </div>
                        
                    </div>
                  
                    <small style={{ marginTop: "44px", marginRight: "8px" }}> {dt.quantity} </small>
                    <Button style={{width:"40%",height:"40px"}} onClick={()=>removeProduct(dt.key)}>Remove</Button>
                </div>
       
            </div>
           
        </div>
    );
};

export default Cart;