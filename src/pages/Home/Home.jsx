import React from 'react';
import Banner from './Banner';
import Galary from './Galary';

const Home = () => {
    return (
        <div className='max-width: 1024px'>
            <Banner></Banner>
            <Galary></Galary>
        </div>
    );
};

export default Home;