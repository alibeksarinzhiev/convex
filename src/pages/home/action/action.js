import React from 'react';
import './action.scss'
import SwiperAction1 from "./swiperAction1/swiperAction1";


const Action = () => {
    return (
        <section className='action'>
            <div className="container">
                <div className="action__text">
                    <h2>Акции</h2>
                    <p>Cмотреть все</p>
                </div>
                <div className="action__cartSwiper">
                    <SwiperAction1/>

                </div>
            </div>
        </section>
    );
};

export default Action;