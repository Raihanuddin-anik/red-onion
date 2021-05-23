import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
const Adress = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('data', data)
      }
    return (
        <div>
             <h2>Edit Delivery Details</h2>
          <hr className="w-75" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="inputfield" name="name" ref={register({ required: true })} placeholder="Your Name" />
            {errors.name && <span className="error"> <br /> Name is required</span>}
            <br />
            <input className="inputfield" name="email" ref={register({ required: true })} placeholder="Your Email" />
            {errors.email && <span className="error"> <br />Email is required</span>}
            <br />
            <input className="inputfield" name="address" ref={register({ required: true })} placeholder="Your Address" />
            {errors.address && <span className="error"><br /> Address is required</span>}
            <br />
            <input className="inputfield" name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span className="error"> <br /> Phone Number is required</span>}
            <br />
            <Button type="submit" variant="danger" className="mt-3 w-100" >SUBMIT</Button>
          </form>
        </div>
    );
};

export default Adress;