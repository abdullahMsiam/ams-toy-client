import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
            <footer className="footer p-10 mx-auto container">
                <div>
                    <span className="footer-title">Blogs</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Log in</a>
                    <a className="link link-hover">Explore toys</a>
                </div>
                <div>
                    <span className="footer-title">AMS TOYS WORLD</span>
                    <a className="link link-hover">Racing car</a>
                    <a className="link link-hover">Buss</a>
                    <a className="link link-hover">Truck</a>
                </div>
                <div>
                    <span className="footer-title">Policy</span>
                    <a className="link link-hover">Terms of use</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;