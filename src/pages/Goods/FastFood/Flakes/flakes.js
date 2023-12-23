import React from 'react';
import './flakes.scss'
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";

const Flakes = () => {
    return (
        <div className='flakes'>
            <div className="container">
                <div className="flakes__box">
                    <h1>Хлопья</h1>
                    <div className="flakes__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Flakes;