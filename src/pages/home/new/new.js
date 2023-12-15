import React from 'react';
import SwiperNew from "./swiperNew/swiperNew";
import './new.scss'

const New = () => {
    return (
        <section className='new'>
            <div className="container">
                <div className="new__text">
                    <h2>Новинки</h2>
                    <p>Cмотреть все</p>
                </div>
                <div className="new__cartSwiper">
                    <SwiperNew/>
                </div>
            </div>
        </section>
    );
};

export default New;