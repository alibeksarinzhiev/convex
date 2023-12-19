import React from 'react';
import './sign.scss'
import image from '../../img/logo.png'
import kres from '../../img/icons8-крестик-48.png'
import {Link} from "react-router-dom"

const Sign = () => {
    return (
        <section className='sign'>
            <div className="container">
                <div className="top">
                    <Link to='/'><img src={image} alt=""/></Link>
                    <div className="top__glav">
                        <h4>Назад на главную</h4>
                        <Link to='/'> <img src={kres} alt=""/></Link>
                    </div>
                </div>
                <div className="sign__main">
                    <div className="sign__dis">
                    <div className="sign__vhod">
                        <h1>Вход</h1>
                        <h4>Номер телефона</h4>
                        <input type="number" placeholder='Введите ваш номер телефона'/>
                    </div>
                    <div className="sign__vhod">
                        <h4>Пароль</h4>
                        <input type="password" placeholder='Введите пароль'/>
                    </div>
                    </div>
                    <div className="sign__zap">
                        <div className="sign__chek">
                        <input type="checkbox"/>
                        <p>Запомнить меня</p>
                        </div>
                        <h3>Забыли пароль?</h3>
                    </div>
                    <div className="sign__but">
                        <div className="sign__voi">
                            <button1>Войти</button1>
                            <p>или</p>
                            <Link  to='/register'>
                                <button2 >Зарегистрироваться</button2>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Sign;