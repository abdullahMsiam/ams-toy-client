import React from 'react';
import img1 from '../../assets/image/banner/img1.avif'
import img2 from '../../assets/image/banner/img2.avif'
import img3 from '../../assets/image/banner/img3.avif'
import img4 from '../../assets/image/banner/img4.avif'
import img5 from '../../assets/image/banner/img5.avif'
import img6 from '../../assets/image/banner/img6.avif'
import img7 from '../../assets/image/banner/img7.avif'

const Banner = () => {
    return (
        <div className='mt-5 pt-12'>
            <div className="carousel carousel-end rounded-box">
                <div className="carousel-item">
                    <img src={img1} alt="car" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="car" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="car" />
                </div>
                <div className="carousel-item">
                    <img src={img4} alt="car" />
                </div>
                <div className="carousel-item">
                    <img src={img5} alt="car" />
                </div>

            </div>
        </div>
    );
};

export default Banner;