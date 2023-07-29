import React from 'react';
import erImg from '../../assets/image/banner/error.avif'
import Navbar from '../Shared/Navbar';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    useTitle('404-error!')
    return (
        <div>
            <div className='flex justify-center mt-10 '>
                <Link to="/"><button className='grow btn btn-neutral btn-block'>-------------------Back To Home------------------</button></Link>
            </div>
            <div className='flex justify-center'>
                <img src={erImg} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;