import React from 'react';
import './cart__goods.scss'
import img from "../img/5d3eee44c3e1b.jpg";
import { motion } from "framer-motion"


const CartGoods = () => {
    return (
        <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            whileTap={{ scale: 0.9 }}
            className='cart__goods'>
            <h2>Картофель</h2>
            <img src={img} alt=""/>
            <h3>300 сом</h3>
            <p>1 килограмм</p>
            <button>В корзину</button>
        </motion.div>
    );
};

export default CartGoods;