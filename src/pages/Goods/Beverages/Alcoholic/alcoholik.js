import React from 'react';
import './alkoholik.scss'
import CartStroka from "../../../../Components/cart__stroka";

const Alcoholik = () => {
    return (
        <div className='alkoholik'>
            <div className="container">
                <div className="alkoholik__box">
                    <h1>Алкогольные</h1>
                    <div className="alkoholik__Line"></div>
                    <CartStroka/>
                    <CartStroka/>
                    <CartStroka/>
                </div>
            </div>
        </div>
    );
};

export default Alcoholik;