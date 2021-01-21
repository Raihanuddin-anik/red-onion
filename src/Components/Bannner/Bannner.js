import React from 'react';
import data from '../../resourse/bannerbackground.png';
import { Image } from 'react-bootstrap';
// import './Banner.css'
const Bannnr = () => {
    return (
        <div>
            <Image src={data} fluid />
        </div>
    );
};

export default Bannnr;