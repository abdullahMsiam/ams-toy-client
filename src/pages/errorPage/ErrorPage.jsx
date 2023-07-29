import React from 'react';
import erImg from '../../assets/image/banner/error.avif'
import Navbar from '../Shared/Navbar';
import useTitle from '../../hooks/useTitle';
const ErrorPage = () => {
    useTitle('404-error!')
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center'>
                <img src={erImg} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;