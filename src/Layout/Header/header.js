import React, {useContext, useEffect, useState} from 'react';
import './header.scss'
import logo from '../../img/logo.png'
import local__img from '../../img/Location.png'
import lishki from '../../img/arrow_to_down.png'
import green_li from '../../img/chevron_down.png'
import basket from '../../img/basket.png'
import search from './Search.svg'
import {Link} from "react-router-dom"
import {CustomContext} from "../../Context";


const Header = () => {
    const {user} = useContext(CustomContext)

    const [logosearch,setLogosearch] = useState('')
    let [scr,setScr] = useState(false)
    const [hover,setHover] = useState(false)

    useEffect(()=>{
    if(typeof window!=='undefined'){
    window.addEventListener('scroll',()=>{
    setScr(window.pageYOffset>40)
    })
    }
    },[])


    return (
        <header className={`${scr?'header scrolled':'header'}`} >
            <div className="container">
                <div className="header__top">
                    <div className="header__left">
                        <Link to='/'><img src={logo} alt=""/></Link>
                        <div className="header__call">
                            <p>Бесплатный звонок</p>
                            <h2>8 800 080 5011</h2>
                        </div>
                    </div>
                    <div className="header__center">
                        <input onChange={(e)=>setLogosearch(e.target.value)} type="text" placeholder='Поиск товаров'/>
                        {
                            logosearch === ''? <img className='header__logo' src={search} alt=""/>:''
                        }

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
                        <Link to='/sign'><button>Войти</button></Link>
                    </div>
                </div>
                <div className='header__line'>

                </div>
                <div className="header__bottom">
                    <div className="header__nav">
                        <ul>
                            <li className='dropdown'>
                                <span>Продукты <img src={lishki} alt=""/></span>
                                <div className="dropdown__content">
                                    <a href="">Овощи и фрукты</a>
                                    <a href="">Молочные продукты</a>
                                    <a href="">Бакалея</a>
                                </div>
                            </li>
                            <li className='dropdown'>
                                <span>
                                        Еда быстрого приготовления <img src={lishki} alt=""/>
                                     </span>
                                <div className="dropdown__content">
                                    <a href=""><p>Овощи и фрукты</p></a>
                                    <a href=""><p>Молочные продукты</p></a>
                                    <a href=""><p>Бакалея</p></a>
                                </div>
                            </li>
                            <li>Консервы <img src={lishki} alt=""/></li>
                            <li>Напитки <img src={lishki} alt=""/></li>
                            <li>Бытовая химия <img src={lishki} alt=""/></li>
                            <li>Уход за собой <img src={lishki} alt=""/></li>

                        </ul>
                    </div>

                    {user.name}

                    <Link to='/basket'><div className="header__basket">
                        <img src={basket} alt=""/>
                        <div className="header__basket_text">
                            <h4>Корзина</h4>
                            <p>2 400 г.</p>
                        </div>
                        <button>12</button>
                    </div></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;