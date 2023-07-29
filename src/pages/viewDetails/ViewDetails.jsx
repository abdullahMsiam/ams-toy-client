import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ViewDetails = () => {
    const toy = useLoaderData();
    useTitle('View Details')
    return (
        <div>
            <div className="card w-1/2 mx-auto my-8 pb-5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <figure><img className='w-auto' src={toy.photo_url} alt="Shoes" /></figure>
                </div>
                <div className='card-body px-9'>
                    <h2 className="card-title">{toy.toy_name}!</h2>
                    <p>Category: {toy.category}</p>
                    <p>Seller Name: {toy.seller_name}</p>
                    <p>Rating: {toy.rating}/5</p>
                    <p>Quantity: {toy.quantity}</p>
                    <p>Details: {toy.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;