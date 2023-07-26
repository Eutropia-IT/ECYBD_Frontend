import React from 'react';
import { Link } from 'react-router-dom';
import Sliderimg from '../../Assets/Slider.jpg'


const Slider = () => {
    return (
        <div className='relative'>
            <img className='h-96 w-full' src={Sliderimg} alt="" />
            <div className='absolute bottom-10 left-20'>
            <p>Lorem ipsum dolor</p>
            <h2>Lorem, ipsum dolor.</h2>
            <Link to='/about'>About Us</Link>
            </div>
        </div>
    );
};

export default Slider;