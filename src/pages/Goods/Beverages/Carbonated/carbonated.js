import React from 'react';
import './carbonated.scss'
import CartStroka from "../../../../Components/cart__stroka";

const Carbonated = () => {
    return (
        <div className='carbonated'>
            <div className="container">
                <div className="carbonated__box">
                    <h1>Газированные</h1>
                    <div className="carbonated__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Carbonated;