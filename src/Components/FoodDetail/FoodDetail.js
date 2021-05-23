import { faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { secondContext, userContext } from '../../App';
import data from '../../data/data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FoodDetail.css'
import { addToDatabaseCart } from '../../utilities/databaseManager';
 


const FoodDetail = () => {
    const notify = () => toast("Food added to your Cart!");
    const { Id } = useParams();
    const product = data.find(pd => pd.key == Id);
    const [count , setcount] = useState(1);
    const [cartProduct, setCartProduct] = useContext(secondContext);
   

    const handleAddProduct =(product) =>{
      console.log(product)
      const secletedData = {
        key : product.key,
        price: product.Price,
        name: product.name,
        picture: product.picture,
        quantity: count
    }
        const totalData = [...cartProduct, secletedData]
     
        setCartProduct(totalData)
       
     alert("Your Food added Click to the Cart Button, at The NavBar ")
    
    }


    const handleIncrease = () =>{
        
        const newCount = Object.keys({matchData: product}).length ;
        console.log(newCount)
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
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-sm-12">
                <h2>{product.name}</h2>
                <p>
                    {product.title}.</p>
                     <div >
                     <b className="fs-3">{product.Price}</b>
                         <span  className="cart"><FontAwesomeIcon style={{cursor:"pointer"}} icon={faMinus} onClick={()=>handleDecrease()}/>  <b className="p-3">{count}</b>
                         <FontAwesomeIcon style={{cursor:"pointer"}} icon={faPlus} onClick={()=>handleIncrease()}/>  </span>
                         
                       
                
                     </div>
                    
                
                <br/>
                <br/>
               <Link onClick={()=>handleAddProduct(product)}  ><Button variant="danger" onClick={notify} style={{borderRadius:"20px",paddingRight:"20px",paddingLeft:"20px"}}><FontAwesomeIcon icon={faShoppingCart}>  </FontAwesomeIcon> Add Food</Button>
               <ToastContainer 
               autoClose={1500} />
               </Link>
                 
            </div >

                 <div className="col-md-6 col-sm-12 mt-5">
                     <img src={product.picture} alt=""/>
                 </div>
            </div>
        </div>
    );
};


export default FoodDetail;