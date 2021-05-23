import React, { useContext } from 'react';
import img from '../../resourse/logo2.png';
import './Header.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { secondContext } from '../../App';

const Header = () => {
    const [cartData, setCartData] = useContext(secondContext);
    return (
      <div className="container">
            <Navbar expand="lg">
            <Navbar.Brand>
                <img
                    src={img}
                   
                    className="w-25 d-inline-block align-top"

                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    
                <Link to="/purshes" style={{marginRight:"30px",marginTop:"10px"}} ><FontAwesomeIcon icon={faShoppingCart} style={{color:"black"}} className="fs-5 me-4"></FontAwesomeIcon><span className="fs-10" style={{marginLeft:"-35px",color:"red"}}>{cartData.length}</span></Link>
                    <Nav.Link className="me-4">LogIn</Nav.Link>
                    <Button variant="danger" href="#home">LogOut</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Header;