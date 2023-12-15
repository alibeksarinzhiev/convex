import React from 'react';
import './popularGoods.scss'
import Cart from "../../../Components/Cart";

const PopularGoods = () => {
    return (
        <section className='popularGoods'>
            <div className="container">
                <div className="popularGoods__text">
                    <h2>Популярные товары</h2>
                    <p>Cмотреть все</p>
                </div>
                <div className="popularGoods__cartSwiper">
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                    <Cart/>
                </div>
            </div>
        </section>
    );
};

export default PopularGoods;