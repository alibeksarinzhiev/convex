import React from 'react';
import './dumplings.scss'
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";

const Dumplings = () => {
    return (
        <div className='dumplinks'>
            <div className="container">
                <div className="dumplinks__box">
                    <h1>Пельмени</h1>
                    <div className="dumplinks__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>

        </div>
    );
};

export default Dumplings;