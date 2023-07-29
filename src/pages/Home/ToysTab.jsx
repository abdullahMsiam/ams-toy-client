import React, { useEffect, useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ToysTab.css';
import { Link } from 'react-router-dom';

const ToysTab = () => {

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleView = id => {
        // console.log(id);
    }

    return (
        <div className='mt-8 mb-8 mx-auto'>
            <h3 className='font-bold text-3xl text-center'>Categories toys</h3>
            <div className='mx-auto w-1/2 mt-9 border-2 border-black p-5 rounded '>
                <div className="tabs">
                    {toys.map((toy, index) => (
                        <div
                            key={toy._id}
                            className={`tab ${activeTab === index ? "active" : ""}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {toy.category}
                        </div>
                    ))}
                </div>
                <div className="tab-content">
                    {toys.map((toy, index) => (
                        <div
                            key={index}
                            className={`tab-panel ${activeTab === index ? "active" : ""}`}
                        >
                            <h2 className='font-bold text-2xl text-center'>{toy.toy_name}</h2>
                            <img className='w-full h-80' src={toy.photo_url} alt={toy.toy_name} />
                            <p>{toy.details}</p>
                            <div className='flex'>
                                <div className='flex-1'>
                                    <p className='font-bold'>Seller: {toy.seller_name}</p>
                                    <p className='font-bold'>Price: ${toy.price}</p>
                                </div>
                                <div>
                                    <Link to={`/toy/${toy._id}`}><button onClick={() => handleView(toy._id)} className="btn btn-neutral">View Details</button></Link>
                                </div>
                            </div>
                            {/* Display other toy details */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToysTab;

