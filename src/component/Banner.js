import React from 'react';
import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.container}
            style={{
                backgroundImage: `url('https://i.ibb.co/RSp2Tf7/div-swiper-slide.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height:'900px'
            }}
        >
            this is banner
            
        </div>
    );
};

export default Banner;