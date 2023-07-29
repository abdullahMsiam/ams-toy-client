import React from 'react';

const SpecialTwo = () => {
    return (
        <div className='text-center'>
            <h2 className='text-center font-bold text-3xl text-neutral-800'>Our Stat in one look!</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow mt-3 mb-6">
                <div className="stat">
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">200K</div>
                    <div className="stat-desc">Till 2023</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Employee</div>
                    <div className="stat-value">5451+</div>
                    <div className="stat-desc">Progress: 17%</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Country</div>
                    <div className="stat-value">59+</div>
                    <div className="stat-desc">Host: BD</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Toys categories</div>
                    <div className="stat-value">90+</div>
                    <div className="stat-desc">On Factory</div>
                </div>

            </div>
        </div>
    );
};

export default SpecialTwo;