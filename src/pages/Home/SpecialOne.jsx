import React from 'react';
import img1 from '../../assets/image/banner/extra.avif'
import { Link } from 'react-router-dom';
import fv1 from '../../assets/image/galary/fv1.avif'
import fv2 from '../../assets/image/galary/fv2.avif'
import fv3 from '../../assets/image/galary/fv3.avif'
import fv4 from '../../assets/image/galary/fv4.avif'
import fv5 from '../../assets/image/galary/fv5.avif'
import fv6 from '../../assets/image/galary/fv6.avif'

const SpecialOne = () => {
    return (
        <div className=' mx-auto mt-7'>
            <h1 className='text-5xl font-bold text-center mb-4 underline'>Our Best Product</h1>
            <div className="hero md:w-11/12 mx-auto container bg-base-200 rounded-lg">
                <div className="hero-content flex-col-reverse items-stretch lg:flex-row-reverse md:w-full">
                    <img src={img1} className="md:w-1/2 hidden md:block rounded-lg shadow-2xl" />
                    <div className='md:w-1/2 grid grid-cols-2 gap-1 content-stretch'>
                        <div className='flex gap-2 items-center rounded-md'>
                            <div>
                                <img className='w-16 md:w-28 rounded-md' src={fv1} alt="" />
                            </div>
                            <div>
                                <p className='md:text-xl mb-1'>Car Lotas</p>
                                <p className='text-base font-bold'>$45</p>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>pick</button>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>Best</button>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center rounded-md'>
                            <div>
                                <img className='w-16 md:w-28 rounded-md' src={fv5} alt="" />
                            </div>
                            <div>
                                <p className='md:text-xl mb-1'>Asx Car</p>
                                <p className='text-base font-bold'>$87</p>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>pick</button>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>Best</button>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center rounded-md'>
                            <div>
                                <img className='w-16 md:w-28 rounded-md' src={fv2} alt="" />
                            </div>
                            <div>
                                <p className='md:text-xl mb-1'>Car Cuties</p>
                                <p className='text-base font-bold'>$75</p>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>pick</button>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>Best</button>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center rounded-md'>
                            <div>
                                <img className='w-16 md:w-28 rounded-md' src={fv3} alt="" />
                            </div>
                            <div>
                                <p className='md:text-xl mb-1'>Fucious Car</p>
                                <p className='text-base font-bold'>$35</p>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>pick</button>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>Best</button>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center rounded-md'>
                            <div>
                                <img className='w-16 md:w-28 rounded-md' src={fv4} alt="" />
                            </div>
                            <div>
                                <p className='md:text-xl mb-1'>Lucious Car</p>
                                <p className='text-base font-bold'>$55</p>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>pick</button>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>Best</button>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center rounded-md'>
                            <div>
                                <img className='w-16 md:w-28 rounded-md' src={fv5} alt="" />
                            </div>
                            <div>
                                <p className='md:text-xl mb-1'>Asx Car</p>
                                <p className='text-base font-bold'>$87</p>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>pick</button>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>Best</button>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center rounded-md'>
                            <div>
                                <img className='w-16 md:w-28 rounded-md' src={fv1} alt="" />
                            </div>
                            <div>
                                <p className='md:text-xl mb-1'>Car Lotas</p>
                                <p className='text-base font-bold'>$45</p>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>pick</button>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>Best</button>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center rounded-md'>
                            <div>
                                <img className='w-16 md:w-28 rounded-md' src={fv6} alt="" />
                            </div>
                            <div>
                                <p className='md:text-xl mb-1'>Center Car</p>
                                <p className='text-base font-bold'>$65</p>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>pick</button>
                                <button className='btn btn-xs bg-black text-white hover:text-black hover:bg-white'>Best</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOne;