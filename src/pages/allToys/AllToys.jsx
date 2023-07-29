import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const toys = useLoaderData();
    // console.log(toys)
    useTitle('All toys')
    // toys.map(toy => console.log(toy.toy_name))
    return (
        <div className='mt-5 mx-auto w-4/5'>
            <div className="overflow-x-auto text-black">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Seller Name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Show More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => (
                                <tr key={toy._id}>
                                    <td>{toy.toy_name}</td>
                                    <td>{toy.seller_name}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td>
                                        <Link to={`/toy/${toy._id}`} className='btn btn-link'>View Details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;



// <th>1</th>
//                                     <td>{toy.toy_name}</td>
//                                     <td>{toy.seller_name}</td>
//                                     <td>{toy.category}</td>
//                                     <td>{toy.price}</td>
//                                     <td>{toy.quantity}</td>
//                                     <td>
//                                         <Link to={`/toy/${toy._id}`}>View Details</Link>
//                                     </td>