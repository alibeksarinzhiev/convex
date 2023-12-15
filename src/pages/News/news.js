import React from 'react';
import './news.scss'
import im from '../../img/Rectangle 95.png'
import {Link} from "react-router-dom"

const News = () => {
    return (
        <section className='news'>
            <div className="container">
                <div className='news__box'>
                    <h2>Новости</h2>
                    <div className="news__both">
                        <div className="news__left">
                            <div className="news__cart">
                                <div className="news__img">
                                    <img src={im} alt=""/>
                                </div>
                                <div className="news__name">
                                    <h4>Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.</h4>
                                    <div className="news__pub">
                                        <p>Дата публикации: 19.04.2020 18:37</p>
                                        <Link to='/details'>Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="news__cart">
                                <div className="news__img">
                                    <img src={im} alt=""/>
                                </div>
                                <div className="news__name">
                                    <h4>Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.</h4>
                                    <div className="news__pub">
                                        <p>Дата публикации: 19.04.2020 18:37</p>
                                        <Link to='/details'>Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="news__cart">
                                <div className="news__img">
                                    <img src={im} alt=""/>
                                </div>
                                <div className="news__name">
                                    <h4>Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.</h4>
                                    <div className="news__pub">
                                        <p>Дата публикации: 19.04.2020 18:37</p>
                                        <Link to='/details'>Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news__right">
                            <div className="news__cart">
                                <div className="news__img">
                                    <img src={im} alt=""/>
                                </div>
                                <div className="news__name">
                                    <h4>Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.</h4>
                                    <div className="news__pub">
                                        <p>Дата публикации: 19.04.2020 18:37</p>
                                        <Link to='/details'>Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="news__cart">
                                <div className="news__img">
                                    <img src={im} alt=""/>
                                </div>
                                <div className="news__name">
                                    <h4>Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.</h4>
                                    <div className="news__pub">
                                        <p>Дата публикации: 19.04.2020 18:37</p>
                                        <Link to='/details'>Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="news__cart">
                                <div className="news__img">
                                    <img src={im} alt=""/>
                                </div>
                                <div className="news__name">
                                    <h4>Заказ товаров и продуктов питания в СИЗО в условиях карантина онлайн.</h4>
                                    <div className="news__pub">
                                        <p>Дата публикации: 19.04.2020 18:37</p>
                                        <Link to='/details'>Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;