import React from 'react';
import './dairy.scss'
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";

const Dairy = () => {
    return (
        <div className='dairy'>
            <div className="container">
                <div className="dairy__box">
                    <h1>Молочные продукты</h1>
                    <div className="dairy__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Dairy;