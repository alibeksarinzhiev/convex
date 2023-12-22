import React from 'react';
import './grocery.scss'
import CartGoods from "../../../../Components/Cart__goods";

const Grocery = () => {
    return (
        <div className='grocery'>
            <div className="container">
                <div className="grocery__box">
                <h1>Бакалея</h1>
                <div className="grocery__Line"></div>
                <div className="grocery__stroka">
                    <CartGoods/>
                    <CartGoods/>
                    <CartGoods/>
                    <CartGoods/>
                </div>
                    <div className="grocery__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                    <div className="grocery__stroka">
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

export default Grocery;