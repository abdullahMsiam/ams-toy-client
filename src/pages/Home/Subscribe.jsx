import React from 'react';
import { FaMailBulk } from 'react-icons/fa';

const Subscribe = () => {
    return (
        <div>
            <h1 className='mt-6 text-center text-4xl underline font-bold mb-4'>Subscribe with Mail</h1>
            <div className='max-w-6xl mx-auto p-12 rounded-lg flex gap-8 justify-around items-center bg-neutral-200 '>
                <div className='text-9xl'>
                    <FaMailBulk></FaMailBulk>
                </div>
                <div>
                    <p className='text-3xl font-semibold mb-3'>Subscribe for get offers</p>
                    <input type="email" placeholder="example@mail.com" className="input border-b-2 border-b-black w-full" />
                    <input className='btn btn-block btn-neutral mt-3' type="submit" value="Send Mail" />
                </div>
            </div>

        </div>
    );
};

export default Subscribe;