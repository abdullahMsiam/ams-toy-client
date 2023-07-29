import React from 'react';
import Banner from './Banner';
import Galary from './Galary';
import ToysTab from './ToysTab';
import SpecialOne from './SpecialOne';

const Home = () => {
    return (
        <div className='max-width: 1024px'>
            <Banner></Banner>
            <SpecialOne></SpecialOne>
            <Galary></Galary>
            <ToysTab  ></ToysTab>
        </div>
    );
};

export default Home;