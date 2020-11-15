import React from 'react';
import data from '../../resourse/logo2.png';
import './Header.css';
import { Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="header">
            <Navbar bg="light">
                <Navbar.Brand href="#home">
                    <img
                        src={data}
                        className="d-inline-block logo"
                        alt="React Bootstrap logo"
                        fluid
                    />
                </Navbar.Brand>
            </Navbar>
            <div className="others">
                
                    <a href="">ICON</a>
                    <a href="">Log In</a>
                    <a href="">Log Out</a>
                
            </div>
        </div>
    );
};

export default Header;