import React, {useContext} from 'react';
import './swiper.scss'
import SwiperSlider from "./swiper_slide/swiper_slide";



const Swiper = () => {
    return (
        <section className='swiper'>
            <div className="container">
                <SwiperSlider/>
            </div>
        </section>
    );
};

export default Swiper;