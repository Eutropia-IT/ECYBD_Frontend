import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';


const Blog = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-fahim-abser.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-bold text-center m-10'>Our Blog</h2>
            <p>Articles and latest bulletins related to our catholic church</p>
            
            <div className='grid gap-8'>
                {
                    services.map(service => <BlogCard
                        key={service._id}
                        service={service}
                    ></BlogCard>)
                }
            </div>
        
            
        </div>
    );
};

export default Blog;