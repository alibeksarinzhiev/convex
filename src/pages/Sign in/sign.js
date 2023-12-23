import React, {useContext, useState} from 'react';
import './sign.scss'
import image from '../../img/logo.png'
import kres from '../../img/icons8-крестик-48.png'
import {Link} from "react-router-dom"
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import {FaEyeSlash} from "react-icons/fa";
import {FaEye} from "react-icons/fa";


const Sign = () => {

    const {status, showPassword,loginUser} = useContext(CustomContext)

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    return (
        <section className='sign'>
            <div className="container">
                <div className="top">
                    <Link to='/'><img src={image} alt=""/></Link>
                    <div className="top__glav">
                        <h4>Назад на главную</h4>
                        <Link to='/'> <img src={kres} alt=""/> </Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit(loginUser)} className="sign__main">
                    <div className="sign__dis">
                        <div className="sign__vhod">
                            <h1>Вход</h1>
                            <h4>Введите ваш email</h4>
                            <input {...register('email')} type="text" placeholder='Введите ваш email'/>
                        </div>
                        <div className="sign__vhod">
                            <h4>Пароль</h4>
                            <input {...register('password')} className='sign__pass' type={status ? "text" : "password"} placeholder='Введите пароль'/>
                            {status ?
                                <FaEyeSlash onClick={() => showPassword()}/> :
                                <FaEye onClick={() => showPassword()}/>
                            }
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
                            <div className="sign__log">

                                <button>Войти</button>
                            </div>
                            <p>или</p>
                            <Link to='/register'>
                                <button2>Зарегистрироваться</button2>
                            </Link>
                        </div>
                    </div>

                </form>
            </div>
        </section>

    );
};

export default Sign;