import React from 'react';
import './sandwich.scss'
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";

const Sandwich = () => {
    return (
        <div className='sandwich'>
            <div className="container">
                <div className="sandwich__box">
                    <h1>Сэндвичи</h1>
                    <div className="sandwich__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Sandwich;