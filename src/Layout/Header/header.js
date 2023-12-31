import React, {useContext, useEffect, useState} from 'react';
import './header.scss'
import logo from '../../img/logo.png'
import local__img from '../../img/Location.png'
import lishki from '../../img/arrow_to_down.png'
import basket from '../../img/basket.png'
import search from './Search.svg'
import {Link} from "react-router-dom"
import {CustomContext} from "../../Context";
import { CiUser } from "react-icons/ci";


const Header = () => {
    const {user,logOut,basket} = useContext(CustomContext)

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

                        {user.email.length?
                            <div>
                                <button onClick={()=>logOut()}>Выйти</button>
                            </div>
                            :
                            <Link to='/sign'><button>Войти</button></Link>
                        }
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
                                    <Link to='/vegetablesandfruits'><p>Овощи и фрукты</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/dairy'><p>Молочные продукты</p> </Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/grocery'><p>Бакалея</p></Link>
                                </div>
                            </li>
                            <li className='dropdown'>
                                <span>
                                        Еда быстрого приготовления <img src={lishki} alt=""/>
                                     </span>
                                <div className="dropdown__content">
                                    <Link to='/dumplinks'><p>Пельмени</p> </Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/sandwich'><p>Сэндвичи</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/flakes'><p>Хлопья</p></Link>
                                </div>
                            </li>
                            <li className='dropdown'>
                                <span>
                                        Консервы <img src={lishki} alt=""/>
                                     </span>
                                <div className="dropdown__content">
                                    <Link to='/vegetable'><p>Овощные</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/meat'><p>Мясные</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/fish'><p>Рыбные</p></Link>
                                </div>
                            </li>
                            <li className='dropdown'>
                                <span>
                                        Напитки <img src={lishki} alt=""/>
                                     </span>
                                <div className="dropdown__content">
                                    <Link to='/carbonated'><p>Газированные</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/natural'><p>Натуральные</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/alkoholik'><p>Алкогольные</p></Link>
                                </div>
                            </li>
                            <li className='dropdown'>
                                <span>
                                        Бытовая химия <img src={lishki} alt=""/>
                                     </span>
                                <div className="dropdown__content">
                                    <Link to='/detergents'><p>Моющие средства</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/freshener'><p>Освежители и ароматизаторы</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='cleaning'><p>Средтва для чистки</p></Link>
                                </div>
                            </li>
                            <li className='dropdown'>
                                <span>
                                        Уход за собой <img src={lishki} alt=""/>
                                     </span>
                                <div className="dropdown__content">
                                    <Link to='/man'><p>Мужской</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/woman'><p>Женский</p></Link>
                                    <div className="dropdown__Line"></div>
                                    <Link to='/children'><p>Детский</p></Link>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className='header__nameUser'>
                        <p>
                            {user.name}
                        </p>
                        <p>
                            {user.surname}
                        </p>
                        {user.email.length?
                            <CiUser className='header__acc'/>
                            :
                            ''
                        }

                    </div>

                    <Link to='/basket'><div className="header__basket">
                        <img src={basket} alt=""/>
                        <div className="header__basket_text">
                            <h4>Корзина</h4>
                            <p>2 400 г.</p>
                        </div>
                        <button>{basket.length}</button>
                    </div></Link>
                </div>
            </div>
        </header>
    );
};

export default Header;