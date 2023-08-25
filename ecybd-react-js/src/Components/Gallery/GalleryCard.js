import React from 'react';

const GalleryCard = ({ service }) => {

    const { img} = service;
    
    return (
        <div className="  ml-10">
            <figure><img className='h-48 w-36 pb-4' src={img} alt="Album" /></figure>
            
        </div>
    );
};

export default GalleryCard;