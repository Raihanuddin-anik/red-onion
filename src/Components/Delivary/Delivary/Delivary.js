import React, { useContext, useEffect, useState } from 'react';
import './Delivary.css'
import { secondContext } from '../../../App';
import Adress from '../Adress/Adress';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';


const Delivary = () => {
  const [cartData, setCartData] = useContext(secondContext);
  
  const removeProduct = (productkey) =>{
    const newCart = cartData.filter(pd=>pd.key !== productkey)
    setCartData(newCart)
   
  }


  return (

    <div className="container">
      <div className=" d-flex justify-content-between row mt-5">
        <div className="col-md-6">
         <Adress></Adress>

        </div>
        <div className="col-md-4 ms-5">
       {cartData.map(dt =>   <Cart dt={dt} cartData={cartData} removeProduct={removeProduct}></Cart> ) }
       <CartItem cartData={cartData} ></CartItem>
        </div>
      </div>
    </div> 




  );
};

export default Delivary;