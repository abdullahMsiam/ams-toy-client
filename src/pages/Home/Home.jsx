import React from 'react';
import Banner from './Banner';
import Galary from './Galary';
import ToysTab from './ToysTab';
import SpecialOne from './SpecialOne';
import SpecialTwo from './SpecialTwo';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='max-width: 1024px'>
            <Banner></Banner>
            <SpecialOne></SpecialOne>
            <Galary></Galary>
            <ToysTab  ></ToysTab>
            <SpecialTwo></SpecialTwo>
        </div>
    );
};

export default Home;