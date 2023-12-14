import React from 'react';
import './header.scss'
import logo from '../../img/logo.png'
import local__img from '../../img/Location.png'
import lishki from '../../img/arrow_to_down.png'
import green_li from '../../img/chevron_down.png'
import basket from '../../img/basket.png'


const Header = () => {
    return (
        <section className='header'>
            <div className="container">
                <div className="header__top">
                    <div className="header__left">
                        <img src={logo} alt=""/>
                        <div className="header__call">
                            <p>Бесплатный звонок</p>
                            <h2>8 800 080 5011</h2>
                        </div>
                    </div>
                    <div className="header__center">
                        <input type="text" placeholder='поиск товаров'/>
                    </div>
                    <div className="header__right">
                        <div className="header__local">
                            <div className="header__image">
                                <img src={local__img} alt=""/>
                            </div>
                            <div className="header__text">
                                <h2>ЕЦ-166/4</h2>
                                <h3>Нур-Султан</h3>
                            </div>
                        </div>
                        <button>Войти</button>
                    </div>
                </div>
                <div className="header__line"></div>
                <div className="header__bottom">
                    <div className="header__nav">
                        <ul>
                            <li>Продукты <img src={lishki} alt=""/></li>
                            <li>Еда быстрого приготовления <img src={lishki} alt=""/></li>
                            <li>Консервы <img src={lishki} alt=""/></li>
                            <li>Напитки <img src={lishki} alt=""/></li>
                            <li>Бытовая химия <img src={lishki} alt=""/></li>
                            <li>Уход за собой <img src={lishki} alt=""/></li>
                            <li>Еще <img src={green_li} alt=""/></li>
                        </ul>
                    </div>
                    <div className="header__basket">
                        <img src={basket} alt=""/>
                        <div className="header__basket_text">
                            <h4>Корзина</h4>
                            <p>2 400 г.</p>
                        </div>
                        <button>12</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;