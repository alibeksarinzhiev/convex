import React from 'react';
import './VegetablesAndFruits.scss'
import CartGoods from "../../../../Components/Cart__goods";

const VegetablesAndFruits = () => {
    return (
        <section className='vegetables'>
            <div className="container">
                <div className="vegetables__box">
                    <h1>Овощи и фрукты</h1>
                    <div className="vegetables__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                    <div className="vegetables__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                    <div className="vegetables__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VegetablesAndFruits;