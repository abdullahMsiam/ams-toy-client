import React from 'react';
import Banner from './Banner';
import Galary from './Galary';
import ToysTab from './ToysTab';
import SpecialOne from './SpecialOne';
import SpecialTwo from './SpecialTwo';
import useTitle from '../../hooks/useTitle';
import KeyFeatures from './KeyFeatures';
import ShowReview from './ShowReview';

const Home = () => {
    useTitle('Home')
    return (
        <div className='max-width: 1024px'>
            <Banner></Banner>
            <KeyFeatures></KeyFeatures>
            <SpecialOne></SpecialOne>
            <Galary></Galary>
            <ToysTab  ></ToysTab>
            <ShowReview></ShowReview>
            <SpecialTwo></SpecialTwo>

        </div>
    );
};

export default Home;