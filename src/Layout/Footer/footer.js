import React from 'react';
import './footer.scss'
import face_book from '../../img/face_book.png'
import instagram from '../../img/instagram.png'
import tviter from '../../img/Twitter.png'
import age_limit from '../../img/age-limit.png'
import {Link} from "react-router-dom"
import {animateScroll} from 'react-scroll'


const Footer = () => {

    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth:true
        })
    };
    return (
        <section className='footer'>
            <div className="container">
                <div className="footer__line1"></div>
                <div className="footer__top">
                    <div className="footer__nav">
                        <ul>
                            <Link onClick={()=>toTop()} to='/about'>О компании</Link>
                            <Link onClick={()=>toTop()} to='/faq'>Вопрос-Ответ</Link>
                            <Link onClick={()=>toTop()} to='/news'>Новости</Link>
                            <Link onClick={()=>toTop()} to='/contacts'>Контакты</Link>
                            <Link onClick={()=>toTop()} to='/balance'>Пополнение баланса</Link>
                        </ul>
                    </div>
                    <div className="footer__contact">
                        <p>Бесплатно по Казахстану</p>
                        <h2>8 800 080 50 11</h2>
                        <h2>8 727 225 50 11</h2>
                    </div>
                </div>
                <div className="footer__line"></div>
                <div className="footer__bottom">
                    <div className="footer__nav_bottom">
                        <div className="footer__nav_li">
                            <ul>
                                <li>2019 © Convex</li>
                                <li>Политика конфиденциальности</li>
                                <li>Публичная оферта</li>
                                <li>Условия возврата</li>
                            </ul>
                        </div>
                        <div className="footer__social_network">
                            <img src={face_book} alt=""/>
                            <img src={instagram} alt=""/>
                            <img src={tviter} alt=""/>
                        </div>
                    </div>
                    <div className="footer__restrictions">
                        <img src={age_limit} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;