import React from 'react';
import './order.scss'
import img from '../image/Group 51.png'
import {Link} from "react-router-dom"

const Order = () => {
    return (
        <section className='order'>
            <div className="container">
                <div className="order__box">
                    <h4>Оформление заказа</h4>
                    <div className="order__adress">
                        <h4>Адрес</h4>
                        <input type="text" placeholder='Bishkek'/>
                        <input type="text" placeholder='Alamedinskyi'/>
                    </div>
                    <div className="order__adress">
                        <h4>Номер получателя</h4>
                        <input type="number" placeholder='+996 557 342 312'/>
                    </div>
                    <div className="order__adress">
                        <h4>Дата доставки</h4>
                        <input type="date" placeholder='дд.мм.гггг.'/>
                    </div>
                    <img src={img} alt=""/>
                    <div className="order__price">
                        <p>Итого:</p>
                        <h2>32 500 тг.</h2>
                    </div>
                    <div className="order__button">
                        <Link to='/payment'> <button>Выбрать вариант оплаты</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;