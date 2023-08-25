import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MemberCard from './MemberCard';
import image1 from '../../Assets/img1.png'
import image2 from '../../Assets/img2.png'
import image3 from '../../Assets/img3.jpg'
import image4 from '../../Assets/img4.jpg'
import image5 from '../../Assets/img5.png'


const Members = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-fahim-abser.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='bg-slate-100'>
            <h2 className='text-5xl font-bold text-center m-10 	'>Executive & Commision Members</h2>
            
            <div className='flex ml-52'>
                {
                    services.map(service => <MemberCard
                        key={service._id}
                        service={service}
                    ></MemberCard>)
                }
            </div>
        
            <div className='text-center mt-10'>
            <Link to={`/allservices`} className="btn text-center btn-primary">View Full Committee</Link>
            </div>
            <h3 className='font-bold text-center text-4xl my-6'>We Are Recognised By</h3>
        <div className='flex pb-6 ml-7 '>
            <img className='w-48 h-32 pl-12' src={image1} alt="" />
            <img className='w-48 h-32 pl-12' src={image5} alt="" />
            <img className='w-48 h-32 pl-12' src={image4} alt="" />
            <img className='w-48 h-32 pl-12' src={image3} alt="" />
            <img className='w-48 h-32 pl-12' src={image2} alt="" />
        </div>
        </div>
    );
};

export default Members;