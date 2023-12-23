import React from 'react';
import './cart__stroka.scss'
import CartGoods from "./Cart__goods";

const CartStroka = () => {
    return (
        <div className="natural__stroka">
            <CartGoods/>
            <CartGoods/>
            <CartGoods/>
            <CartGoods/>
        </div>
    );
};

export default CartStroka;