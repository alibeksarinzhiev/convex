import React from 'react';
import './man.scss'
import CartStroka from "../../../../Components/cart__stroka";

const Man = () => {
    return (
        <div className='man'>
            <div className="container">
                <div className="man__box">
                    <h1>Мужской</h1>
                    <div className="man__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Man;