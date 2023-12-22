import React from 'react';
import './cart__goods.scss'
import img from "../img/5d3eee44c3e1b.jpg";

const CartGoods = () => {
    return (
        <div className='cart__goods'>
            <h2>Картофель</h2>
            <img src={img} alt=""/>
            <h3>300 сом</h3>
            <p>1 килограмм</p>
        </div>
    );
};

export default CartGoods;