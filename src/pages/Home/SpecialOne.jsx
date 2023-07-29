import React from 'react';
import img1 from '../../assets/image/banner/extra.avif'
import { Link } from 'react-router-dom';

const SpecialOne = () => {
    return (
        <div className='w-3/4 mx-auto mt-5'>
            <div className="hero min-h-screen container bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Our Extra Effort Here</h1>
                        <p className="py-6">
                            Hey, we make interest to you for exploring our docs. You can know more about us how we are working for you children. And you can also make a question or provide your demand to us. Keep Happy....
                        </p>
                        <Link to="/blogs"><button className="btn btn-neutral">Blogs</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOne;