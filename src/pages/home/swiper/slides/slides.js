import React from 'react';
import './slides.scss'
import Food from '././image_slides/Food.png'
import New from './image_slides/New.png'
import Stock from './image_slides/Stock.png'
import Kits from './image_slides/Kits.png'

const Slides = () => {
    return (
        <section className='slides'>
            <div className="container">
                <div className="slides__tovar">
                    <div className="slides__dishes">
                        <img src={Food} alt=""/>
                        <h2>Горячие блюда</h2>
                        <p>Вкуснейшие блюда из 4 ресторанов</p>
                    </div>
                    <div className="slides__newItems">
                        <img src={New} alt=""/>
                        <h2>Новинки</h2>
                        <p>Новые позиции</p>
                    </div>
                    <div className="slides__stock">
                        <img src={Stock} alt=""/>
                        <h2>Акции</h2>
                        <p>Лучшие цены</p>
                    </div>
                    <div className="slides__kits">
                        <img src={Kits} alt=""/>
                        <h2>Комплекты</h2>
                        <p>Все в одном</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Slides;