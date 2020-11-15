import React from 'react';
import { Image } from 'react-bootstrap';
import data from '../../resourse/bannerbackground.png';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="iamge">
                <Image src={data} fluid />
            </div>
            <div className="banner-text">
                <h1>Best food waiting for you</h1>
                <input type="search" name="" id=""/>
                <button>search</button>
            </div>
        </div>
    );
};

export default Banner;