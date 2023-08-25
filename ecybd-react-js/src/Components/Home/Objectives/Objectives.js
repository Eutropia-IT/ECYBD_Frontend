import React from 'react';
import gallery1 from '../../Assets/Gallery1.jpg'
import gallery2 from '../../Assets/Gallery2.jpg'
import gallery3 from '../../Assets/Gallery3.jpg'
import gallery4 from '../../Assets/Gallery4.jpg'
import { Link } from 'react-router-dom';


const Objectives = () => {
    return (
        <div className='flex'>
            <div className='w-1/2'>
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
            </div>
            <div className='pl-28 pt-10'>
                <p>Lorem ipsum dolor </p>
                <p>Lorem ipsum dolor </p>
                <p>Lorem ipsum dolor </p>
                <p>Lorem ipsum dolor </p>
                <p>Lorem ipsum dolor </p>
                <p>Lorem ipsum dolor </p>
                <p>Lorem ipsum dolor </p>
                <Link to='/gallery'>View Gallery</Link>
            </div>
        </div>
    );
};

export default Objectives;