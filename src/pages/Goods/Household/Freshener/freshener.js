import React from 'react';
import './freshener.scss'
import CartStroka from "../../../../Components/cart__stroka";

const Freshener = () => {
    return (
        <div className='freshener'>
            <div className="container">
                <div className="freshener__box">
                    <h1>Освежители и ароматизаторы</h1>
                    <div className="freshener__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Freshener;