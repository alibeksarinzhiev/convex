import React from 'react';
import './grocery.scss'
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";

const Grocery = () => {
    return (
        <div className='grocery'>
            <div className="container">
                <div className="grocery__box">
                <h1>Бакалея</h1>
                <div className="grocery__Line"></div>
                <CartStroka/>
                <CartStroka/>
                <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Grocery;