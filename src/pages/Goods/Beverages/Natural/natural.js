import React from 'react';
import './natural.scss'
import CartGoods from "../../../../Components/Cart__goods";

const Natural = () => {
    return (
        <div className='natural'>
            <div className="container">
                <div className="natural__box">
                    <h1>Натуральные</h1>
                    <div className="natural__Line"></div>
                    <div className="natural__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                    <div className="natural__stroka">
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                        <CartGoods/>
                    </div>
                    <div className="natural__stroka">
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

export default Natural;