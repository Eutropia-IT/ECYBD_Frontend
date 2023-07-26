import React from 'react';
import Slider from './Slider/Slider';
import Hero from './Hero/Hero';
import Objectives from './Objectives/Objectives';
import Members from './Members/Members';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Hero></Hero>
            <Objectives></Objectives>
            <Members></Members>
        </div>
    );
};

export default Home;