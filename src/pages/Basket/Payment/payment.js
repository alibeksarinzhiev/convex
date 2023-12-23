import React from 'react';
import './payment.scss'
import img from '../../Balance/image/Qiwi.png'

const Payment = () => {
    return (
        <section className='payment'>
            <div className="container">
                <div className="payment__box">
                    <h1>Выберите способ оплаты</h1>
                    <div className="payment__stroka">
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                            <p>Кошелек Qiwi</p>
                        </div>
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                            <p>Кошелек Qiwi</p>
                        </div>
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                            <p>Кошелек Qiwi</p>
                        </div>
                    </div>
                    <div className="payment__stroka">
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                            <p>Кошелек Qiwi</p>
                        </div>
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                            <p>Кошелек Qiwi</p>
                        </div>
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                            <p>Кошелек Qiwi</p>
                        </div>
                    </div>
                    <div className="payment__stroka">
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                         <p>Кошелек Qiwi</p>
                        </div>
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                            <p>Кошелек Qiwi</p>
                        </div>
                        <div className="payment__bank">
                            <img src={img} alt=""/>
                            <p>Кошелек Qiwi</p>
                        </div>
                    </div>
                    <div className="payment__button">
                        <button>Продолжить</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Payment;