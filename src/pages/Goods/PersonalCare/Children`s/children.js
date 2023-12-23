import React from 'react';
import CartStroka from "../../../../Components/cart__stroka";
import './children.scss'

const Children = () => {
    return (
        <div className='children'>
            <div className="container">
                <div className="children__box">
                    <h1>Детский</h1>
                    <div className="children__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Children;