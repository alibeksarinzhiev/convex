import React from 'react';
import CartStroka from "../../../../Components/cart__stroka";
import './detergents.scss'

const Detergents = () => {
    return (
        <div className='detergents'>
            <div className="container">
                <div className="detergents__box">
                    <h1>Моющие средства</h1>
                    <div className="detergents__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Detergents;