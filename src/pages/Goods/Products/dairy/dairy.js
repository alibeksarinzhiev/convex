import React from 'react';
import './dairy.scss'
import CartGoods from "../../../../Components/Cart__goods";

const Dairy = () => {
    return (
        <div className='dairy'>
            <div className="container">
                <div className="dairy__box">
                    <h1>Молочные продукты</h1>
                    <div className="dairy__Line"></div>
                    <div className="dairy__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                    <div className="dairy__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                    <div className="daity__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dairy;