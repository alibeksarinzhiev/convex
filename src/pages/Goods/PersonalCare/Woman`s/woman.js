import React from 'react';
import CartStroka from "../../../../Components/cart__stroka";
import './woman.scss'

const Woman = () => {
    return (
        <div className='woman'>
            <div className="container">
                <div className="woman__box">
                    <h1>Женский</h1>
                    <div className="woman__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>w
            </div>
        </div>
    );
};

export default Woman;