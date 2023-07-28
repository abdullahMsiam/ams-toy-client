import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-40 h-[600px] '>
            <h2 className='text-2xl font-bold mt-4'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className='font-bold'>An access token is a short-lived credential used to access protected resources on behalf of a user. A refresh token is a longer-lived token used to obtain new access tokens when they expire. They should be securely stored in HTTP-only cookies or local storage on the client-side.</p>
            <h2 className='text-2xl font-bold mt-4'>Compare SQL and NoSQL databases?
            </h2>
            <p className='font-bold'>SQL databases use fixed schemas with structured tables and ACID properties for strict consistency, best for structured data. NoSQL databases use flexible schemas, handle unstructured data, and offer eventual consistency, ideal for scalability and diverse data formats.</p>
            <h2 className='text-2xl font-bold mt-4'>What is express js? What is Nest JS?
            </h2>
            <p className='font-bold'>Express.js is a web application framework for Node.js, simplifying server-side development. NestJS is a progressive Node.js framework built on Express.js, offering additional features like TypeScript support and modular architecture for scalable applications.</p>
            <h2 className='text-2xl font-bold mt-4'>What is MongoDB aggregate and how does it work?
            </h2>
            <p className='font-bold'>MongoDB aggregate is a data processing method using a pipeline of stages for filtering, grouping, sorting, and transforming data. Each stage applies specific operations, creating a powerful data processing tool.</p>
        </div>
    );
};

export default Blogs;