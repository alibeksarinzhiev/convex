import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Slide1 from "./slide1/slide1";


import 'swiper/css'
import './swiper_slider.scss'


const SwiperSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide>
               <Slide1/>
            </SwiperSlide>
            <SwiperSlide>
                <Slide1/>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperSlider;