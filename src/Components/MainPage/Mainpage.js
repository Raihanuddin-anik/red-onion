import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Main from '../Main/Main';

const Mainpage = () => {
    return (
        <div>
            <Banner></Banner>
            <Main></Main>
            <Info></Info>
        </div>
    );
};

export default Mainpage;