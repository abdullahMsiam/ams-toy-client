import React from 'react';
import img1 from '../../assets/image/galary/img1.avif'

import img3 from '../../assets/image/galary/img3.avif'
import img4 from '../../assets/image/galary/img4.avif'
import img5 from '../../assets/image/galary/img5.avif'
import img6 from '../../assets/image/galary/img6.avif'

const Galary = () => {
    return (
        <div className='mt-6'>
            <h2 className=' text-center text-4xl font-bold mb-3'>Toys Gallery</h2>
            <div className=' w-11/12 grid lg:grid-cols-3 gap-4'>
                <div className="mx-auto card w-11/12 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Car Toy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Your children's toys can be this!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Car</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto card w-11/12 bg-base-100 shadow-xl">
                    <figure><img src={img6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Car Toy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Your children's toys can be this!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Car</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto card w-11/12 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Car Toy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Your children's toys can be this!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Car</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto card w-11/12 bg-base-100 shadow-xl">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Car Toy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Your children's toys can be this!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Car</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto card w-11/12 bg-base-100 shadow-xl">
                    <figure><img src={img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Car Toy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Your children's toys can be this!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Car</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto card w-11/12 bg-base-100 shadow-xl">
                    <figure><img src={img6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Car Toy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Your children's toys can be this!</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Car</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Galary;