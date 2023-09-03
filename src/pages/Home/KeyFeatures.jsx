import React from 'react';
import { FaAmazon, FaAmazonPay, FaGooglePlay, FaRecycle } from 'react-icons/fa';

const KeyFeatures = () => {
    return (
        <div className='mt-5  '>
            <div className='text-center text-4xl underline font-bold'>Key Service</div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center place-content-evenly mt-3 mx-1'>
                <div className='text-7xl border-2 border-black rounded-md p-4 w-full py-4'>
                    <FaAmazon className='mx-auto'></FaAmazon>
                    <p className='text-xl text-center font-semibold'>Collaborate Amazon</p>
                </div>
                <div className='text-7xl border-2 border-black rounded-md p-4 w-full py-4'>
                    <FaAmazonPay className='mx-auto'></FaAmazonPay>
                    <p className='text-xl text-center font-semibold'>Pay Online</p>
                </div>
                <div className='text-7xl border-2 border-black rounded-md p-4 w-full py-4'>
                    <FaGooglePlay className='mx-auto'></FaGooglePlay>
                    <p className='text-xl text-center font-semibold'>Mobile App</p>
                </div>
                <div className='text-7xl border-2 border-black rounded-md p-4 w-full py-4'>
                    <FaRecycle className='mx-auto'></FaRecycle>
                    <p className='text-xl text-center font-semibold'>Recycle Product</p>
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;