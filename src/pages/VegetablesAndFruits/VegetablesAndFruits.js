import React from 'react';
import './VegetablesAndFruits.scss'
import icon from '../../img/logo.png'

const VegetablesAndFruits = () => {
    return (
        <section className='vegetables'>
            <div className="container">
                <div className="vegetables__top">
                    <img src={icon} alt=""/>
                    <h2>На главную страницу</h2>
                </div>
                <h1>Овощи и фрукты</h1>
                <div className="vegetables__box">

                </div>
            </div>
        </section>
    );
};

export default VegetablesAndFruits;