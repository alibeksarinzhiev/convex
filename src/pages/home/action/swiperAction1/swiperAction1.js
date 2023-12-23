import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './swiperAction1.scss';

// import required modules
import Cart from "../../../../Components/Cart";
import CartViewAll from "../../../../Components/cart_view_all";

// import required modules
import {Navigation } from 'swiper/modules';


const SwiperAction1 = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            loop={false}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide>
                <Cart/>
            </SwiperSlide>
            <SwiperSlide>
                <Cart/>
            </SwiperSlide>
            <SwiperSlide>
                <Cart/>
            </SwiperSlide>
            <SwiperSlide>
                <Cart/>
            </SwiperSlide>
            <SwiperSlide>
                <Cart/>
            </SwiperSlide>
            <SwiperSlide>
                <Cart/>
            </SwiperSlide>
            <SwiperSlide>
                <Cart/>
            </SwiperSlide>
            <SwiperSlide>
                <CartViewAll/>
            </SwiperSlide>

        </Swiper>
    );
};

export default SwiperAction1;