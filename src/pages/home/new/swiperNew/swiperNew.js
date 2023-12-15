import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './swiperNew.scss';

// import required modules
import { Navigation } from 'swiper/modules';
import Cart from "../../../../Components/Cart";
import CartViewAll from "../../../../Components/cart_view_all";

export default function SwiperNew() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><Cart/><Cart/><Cart/><Cart/></SwiperSlide>
                <SwiperSlide><Cart/><Cart/><Cart/><Cart/></SwiperSlide>
                <SwiperSlide><Cart/><Cart/><Cart/><Cart/></SwiperSlide>
                <SwiperSlide><Cart/><Cart/><Cart/><CartViewAll/></SwiperSlide>
            </Swiper>
        </>
    );
}