import React from 'react';
import './vegetable.scss';
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";

const Vegetable = () => {
    return (
        <div className='vegetable'>
            <div className="container">
                <div className="vegetable__box">
                    <h1>Овощные</h1>
                    <div className="vegetable__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>

                </div>
            </div>
        </div>
    );
};

export default Vegetable;