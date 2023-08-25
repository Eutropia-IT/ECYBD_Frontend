import React from 'react';
import './MemberCard.css'

const MemberCard = ({ service }) => {

    const { img} = service;
    
    return (
        <div className="  ml-10">
            <figure><img className='card-img' src={img} alt="Album" /></figure>
            <h4 className='font-bold ml-16'>John Doe</h4>
            <p className='ml-20'>Pastor</p>
        </div>
    );
};

export default MemberCard;