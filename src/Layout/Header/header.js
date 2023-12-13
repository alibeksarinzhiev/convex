import React from 'react';
import './header.scss'
import logo from '../../img/logo.png'
import local__img from '../../img/Location.png'


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

                </div>
            </div>
        </section>
    );
};

export default Header;