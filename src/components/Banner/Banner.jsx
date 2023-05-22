// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
    

    return <>

        <Swiper
            // install Swiper modules
            modules={[Autoplay,Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 ,stopOnLastSlide:false}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='text-center'
                    style={{
                        backgroundImage: `url('https://i.ibb.co/RSp2Tf7/div-swiper-slide.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '750px',
                        paddingTop: "220px"

                    }}
                >
                    <h1 className='text-white font-extrabold mx-auto text-4xl md:text-6xl w-4/6'>Sharing the God’s Love <br />
                        with Everyone</h1>

                    <p className='text-white mx-auto mt-12 w-3/6 text-lg '>Our parishioners and members of our community are always ready to support new members and share the God’s love with them.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className='text-center'
                    style={{
                        backgroundImage: `url('https://i.ibb.co/RSp2Tf7/div-swiper-slide.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '750px',
                        paddingTop: "220px"

                    }}
                >
                    <h1 className='text-white font-extrabold mx-auto text-4xl md:text-6xl w-4/6'>Sharing the God’s Love <br />
                        with Everyone</h1>

                    <p className='text-white mx-auto mt-12 w-3/6 text-lg '>Our parishioners and members of our community are always ready to support new members and share the God’s love with them.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className='text-center'
                    style={{
                        backgroundImage: `url('https://i.ibb.co/RSp2Tf7/div-swiper-slide.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '750px',
                        paddingTop: "220px"

                    }}
                >
                    <h1 className='text-white font-extrabold mx-auto text-4xl md:text-6xl w-4/6'>Sharing the God’s Love <br />
                        with Everyone</h1>

                    <p className='text-white mx-auto mt-12 w-3/6 text-lg '>Our parishioners and members of our community are always ready to support new members and share the God’s love with them.</p>
                </div>
            </SwiperSlide>

        </Swiper>
    </>
}