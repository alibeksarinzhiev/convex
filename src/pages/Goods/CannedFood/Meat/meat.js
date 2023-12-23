import React from 'react';
import './meat.scss'
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";

const Meat = () => {
    return (
        <div className='meat'>
            <div className="container">
                <div className="meat__box">
                    <h1>Мясные</h1>
                    <div className="meat__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>

                </div>
            </div>
        </div>
    );
};

export default Meat;