import React from 'react';
import img1 from '../../assets/image/banner/img1.avif'
import img2 from '../../assets/image/banner/img2.avif'
import img3 from '../../assets/image/banner/img3.avif'

const Banner = () => {
    return (
        <div className='mt-5'>
            <div className="h-[600px] carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-yellow-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-yellow-600">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-yellow-600">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-yellow-600">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-yellow-600">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-yellow-600">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;