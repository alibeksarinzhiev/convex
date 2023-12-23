import React from 'react';
import './fish.scss';
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";

const Fish = () => {
    return (
        <div className='fish'>
            <div className="container">
                <div className="fish__box">
                    <h1>Рыбные</h1>
                    <div className="fish__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Fish;