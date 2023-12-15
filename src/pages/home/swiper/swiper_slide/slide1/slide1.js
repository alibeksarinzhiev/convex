import React from 'react';
import './slide1.scss'
import SladeImg from './img_slide/Rectangle 3.png'

const Slide = () => {
    return (
        <div className='slide'>
            <div className="container">
                <div className="slide__text">
                    <div className="slide__textTop">
                        <h1>Всегда свежие молочные продукты</h1>
                        <p>Только качественные товары, за <br/> которыми мы всегда следим</p>
                    </div>
                    <div className="slide__buttonBottom">
                        <button>Подробнее</button>
                    </div>
                </div>
                <div className="slide__img">
                    <img src={SladeImg} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Slide;