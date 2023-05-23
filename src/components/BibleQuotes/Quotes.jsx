// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Quotes() {
    return <div className='text-black'>
        <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, stopOnLastSlide: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='text-center'
                    style={{ backgroundColor: "#FEF0F8", height: "345px" }}
                >
                    <h2 className="font-bold pt-12 text-center text-2xl underline underline-offset-4 decoration-4 decoration-red-600" style={{ color: "#18299D" }}>Bible  Quotes</h2>

                    <div className="mx-auto  w-6\6 md:w-4/6">
                        <p className="text-center mb-5 text-sm md:text-xl mt-14">For God so loved the world that he gave his one and only begotten Son, that who ever believes in him shall not perish but have eternal life.
                        </p>

                        <p className="text-center" style={{ color: "#18299D" }}> — John 3:16 (KJV)</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='text-center'
                    style={{ backgroundColor: "#FEF0F8", height: "345px" }}
                >
                    <h2 className="font-bold pt-12 text-center text-2xl underline" style={{ color: "#18299D" }}>Bible  Quotes</h2>

                    <div className="mx-auto w-6\6 md:w-4/6">
                        <p className="text-center mb-5 text-sm md:text-xl mt-14">For God so loved the world that he gave his one and only begotten Son, that who ever believes in him shall not perish but have eternal life.
                        </p>

                        <p className="text-center pb-15px" style={{ color: "#18299D" }}> — John 3:16 (KJV)</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='text-center'
                    style={{ backgroundColor: "#FEF0F8", height: "345px" }}
                >
                    <h2 className="font-bold pt-12 text-center text-2xl underline" style={{ color: "#18299D" }}>Bible  Quotes</h2>

                    <div className="mx-auto w-6\6 md:w-4/6">
                        <p className="text-center mb-5 text-sm md:text-xl mt-14">For God so loved the world that he gave his one and only begotten Son, that who ever believes in him shall not perish but have eternal life.
                        </p>

                        <p className="text-center" style={{ color: "#18299D" }}> — John 3:16 (KJV)</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
}