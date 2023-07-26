import React, { useEffect, useState } from 'react';
import GalleryCard from './GalleryCard';


const Gallery = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://service-review-server-fahim-abser.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
      <div className='flex'>
      {
          services.map(service => <GalleryCard
              key={service._id}
              service={service}
          ></GalleryCard>)
      }
  </div>
    );
};

export default Gallery;