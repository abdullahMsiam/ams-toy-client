import React from 'react';
import quoteBg from '../../assets/image/banner/background.png'

const ShowReview = () => {
    return (
        <div className='mx-auto mt-5'>
            <h1 className='text-center text-4xl font-bold mb-4 underline'>Whats they say about us</h1>
            <div className="max-w-[350px] md:max-w-7xl mx-auto text-sm breadcrumbs">
                <ul>
                    <li>
                        <div>
                            <div className='flex gap-2'>
                                <div className="card bg-base-100 shadow-xl image-full">
                                    <img className='' src={quoteBg} alt="" />
                                    <div className="my-auto mx-auto card-body">
                                        <h2 className="card-title">Jems Jhon-</h2>
                                        <p>
                                            "Outstanding product: excellent quality, <br />user-friendly design, remarkable performance. Highly <br /> recommended for its value and reliability."
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className='flex gap-2'>
                                <div className="card bg-base-100 shadow-xl image-full">
                                    <img className='' src={quoteBg} alt="" />
                                    <div className="my-auto mx-auto card-body">
                                        <h2 className="card-title">Watson-</h2>
                                        <p>
                                            "Outstanding product: excellent quality, <br />user-friendly design, remarkable performance. Highly <br /> recommended for its value and reliability."
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className='flex gap-2'>
                                <div className="card bg-base-100 shadow-xl image-full">
                                    <img className='' src={quoteBg} alt="" />
                                    <div className="my-auto mx-auto card-body">
                                        <h2 className="card-title">Ama Any-</h2>
                                        <p>
                                            "Outstanding product: excellent quality, <br />user-friendly design, remarkable performance. Highly <br /> recommended for its value and reliability."
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className='flex gap-2 '>
                                <div className="card bg-base-100 shadow-xl image-full">
                                    <img className='' src={quoteBg} alt="" />
                                    <div className="my-auto mx-auto card-body">
                                        <h2 className="card-title">Peter Hats-</h2>
                                        <p>
                                            "Outstanding product: excellent quality, <br />user-friendly design, remarkable performance. Highly <br /> recommended for its value and reliability."
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <div className='flex gap-2'>
                                <div className="card bg-base-100 shadow-xl image-full">
                                    <img className='' src={quoteBg} alt="" />
                                    <div className="my-auto mx-auto card-body">
                                        <h2 className="card-title">Frozen girl-</h2>
                                        <p>
                                            "Outstanding product: excellent quality, <br />user-friendly design, remarkable performance. Highly <br /> recommended for its value and reliability."
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default ShowReview;