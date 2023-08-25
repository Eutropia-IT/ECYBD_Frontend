import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ service }) => {

    const { img, name, price, details } = service;
    
    return (
        <div className='flex'>
            <div className="card lg:card-side bg-base-300  p-10">
            <figure><img className='card-img' src={img} alt="Album" /></figure>
        </div>
        <div className="pt-10">
        <h2 className="card-title text-5xl">{name}</h2>
        <h3 className='text-4xl'>Price: {price}</h3>
        <p>{details.slice(0, 99)}...</p>
        <div>
            <Link to={`/service/${service._id}`}><button className='btn'>READ ARTICLE</button></Link>
        </div>
    </div>
        </div>
    );
};

export default BlogCard;