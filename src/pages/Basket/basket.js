import React, {useContext, useState} from 'react';
import './basket.scss'
import Cart from "../../Components/Cart";
import {Link} from "react-router-dom"
import ModalKod from "./modal__kod";
import {CustomContext} from "../../Context";

const Basket = () => {
    const {basket,plusOne,minusOne,deleteObject,deleteAll,product} = useContext(CustomContext)
    const [modalkodActive, setModalkodActive]= useState(false)


    return (
        <section className='basket'>
            <div className="container">
                <div className="basket__box">
                    <div className="basket__left">
                        <div className="basket__bas">
                            <h2>Корзина</h2>
                            <span  onClick={()=>deleteAll()}>
                                <p>Очистить корзину</p>
                            </span>
                        </div>
                        {basket.map((el,idx)=>(
                            <div className='basket__cart'>
                            <div className="basket__product">
                                <img src={el.image} alt=""/>
                                <div className="basket__name">
                                    <h4>{el.title}</h4>
                                    <p>Осталось: 2 шт.</p>
                                </div>
                                <div className='basket__kolichestvo'>
                                    <span className='cart__minus' onClick={()=>minusOne(el.id)} ><p>-</p></span>
                                    <h4>{el.quantity}</h4>
                                    <span className='cart__plus' onClick={()=>plusOne(el.id)}><p>+</p></span>
                                </div>
                                <div className="basket__price">
                                    <h3>{el.price} сом/кг.</h3>
                                    <p>410 тг./шт.</p>
                                </div>
                                <div className="basket__krestik">
                                    <span onClick={()=>deleteObject(el.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 34 34" fill="none">
                                        <path d="M23.2473 10.5289L23.3345 10.6066C23.6972 10.9693 23.7231 11.5411 23.4122 11.9336L23.3345 12.0209L18.3848 16.9706L23.3345 21.9203C23.6972 22.283 23.7231 22.8548 23.4122 23.2473L23.3345 23.3346C22.9719 23.6972 22.4001 23.7231 22.0075 23.4123L21.9203 23.3346L16.9706 18.3848L12.0208 23.3346C11.6582 23.6972 11.0864 23.7231 10.6938 23.4123L10.6066 23.3346C10.244 22.9719 10.2181 22.4001 10.5289 22.0076L10.6066 21.9203L15.5564 16.9706L10.6066 12.0209C10.244 11.6582 10.2181 11.0864 10.5289 10.6939L10.6066 10.6066C10.9692 10.244 11.5411 10.2181 11.9336 10.5289L12.0208 10.6066L16.9706 15.5564L21.9203 10.6066C22.283 10.244 22.8548 10.2181 23.2473 10.5289L23.3345 10.6066L23.2473 10.5289Z" fill="#ABABAB"/>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="basket__Line"></div>

                            </div>
                            ))}



                    </div>

                    <div className="basket__right">
                        <div className="basket__zakaz">
                            <Link to='/order'><button>Оформить заказ</button></Link>
                        </div>
                        <div className="basket__promokod">
                            <button onClick={() => setModalkodActive(true)}>Использовать промокод</button>
                        </div>
                        <div className="basket__summa">
                            <h4>Количество единиц:</h4>
                            <p>{basket.reduce((acc,rec)=>(
                                acc + rec.quantity
                            ),0)}</p>
                        </div>
                        <div className="basket__summa">
                            <h4>Итоговый вес:</h4>
                            <p> 2222 г</p>
                        </div>
                        <div className="basket__summa">
                            <h4>Тип заказа:</h4>
                            <p>бандероль</p>
                        </div>
                        <div className="basket__summa">
                            <h4>Сумма заказа:</h4>
                            <p>{basket.reduce((acc,rec)=>(
                                acc + rec.quantity * rec.price
                            ),0)} сом</p>
                        </div>
                        <div className="basket__summa">
                            <h4>Промокод:</h4>
                            <p>-3 000 тг.</p>
                        </div>
                        <div className="basket__summa">
                            <h4>Cтоимость доставки</h4>
                            <p>1 500 тг.</p>
                        </div>
                        <div className="basket__itogo">
                            <p>Итого:</p>
                            <h3>{basket.reduce((acc,rec)=>(
                                acc + rec.quantity * rec.price
                            ),0)} сом</h3>
                        </div>
                    </div>
                </div>
                <div className="basket__bottom">
                    <h3>Свежие акции</h3>
                    <p>Cмотреть все</p>
                </div>
                <div className="basket__action">
                    {
                        product.filter((el)=>(
                            el.action === "true"
                        ))
                            .map((el)=>(
                                <Cart el={el}/>
                            ))}
                </div>

            </div>
            <ModalKod active={modalkodActive} setActive={setModalkodActive}/>
        </section>
    );
};

export default Basket;