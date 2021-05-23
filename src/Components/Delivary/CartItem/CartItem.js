import React,{ useState}  from 'react';
import { Button } from 'react-bootstrap';

const CartItem = ({cartData}) => {
  
    let total = 0;
    console.log(total)
    for (let i = 0; i < cartData.length; i++) {
        const product = cartData[i];
        console.log(product)
        total = Math.round(total) + Math.round(product.price) ;
        console.log(total)
    }
    const tax = (total/100*5).toFixed(2)
   const subTotal = Math.ceil(total)+Math.round(tax) + 5;
   const popUp = () =>{
       alert("You Ordered Successfully")
   }
    return (

        <div>

            <div className="mt-3 p-2">
                <div className="d-flex">
                    <div>
                        <h6> {cartData.length} item</h6>
                    </div>
                    <div className="ms-auto">
                        <h6 >{total}$</h6>
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <h6>Tax</h6>
                    </div>
                    <div className="ms-auto">
                        <h6 >{tax}$</h6>
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <h6>Delivery</h6>
                    </div>
                    <div className="ms-auto">
                        <h6 >5$</h6>
                    </div>
                </div>
                <div className="d-flex">
                    <div>
                        <h6>Total</h6>
                    </div>
                    <div className="ms-auto">
                        <h6 >{subTotal}$</h6>
                    </div>
                </div>
            </div>
            <Button onClick={popUp} className="w-100">Place</Button>
        </div>

    );
};

export default CartItem;