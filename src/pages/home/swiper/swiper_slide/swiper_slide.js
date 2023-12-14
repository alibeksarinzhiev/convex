import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Slaide1 from "./slaide1/slaide1";


import 'swiper/css'
import './swiper_slider.scss'


const SwiperSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide>
               <Slaide1/>
            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>

        </Swiper>
    );
};

export default SwiperSlider;