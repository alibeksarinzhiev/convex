import React from 'react';
import CartStroka from "../../../../Components/cart__stroka";
import './cleaning.scss'

const Cleaning = () => {
    return (
        <div className='cleaning'>
            <div className="container">
                <div className="cleaning__box">
                    <h1>Средства для чистки</h1>
                    <div className="cleaning__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Cleaning;