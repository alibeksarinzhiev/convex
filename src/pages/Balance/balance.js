import React from 'react';
import './balance.scss'
import qiwi from './image/Qiwi.png'
import master from './image/MasterCard.png'
import visa from './image/Visa.png'
import atf from './image/image 8.png'
import alfa from './image/image 7.png'
import rbk from './image/image 10 (1).png'
import rec from './image/Rectangle 106.png'

const Balance = () => {
    return (
        <section className='balance'>
            <div className="container">
                <h1>Пополнить баланс</h1>
                <div className="balance__box">
                    <div className="balance__left">
                        <h2>Вы можете пополнить свой баланс, баланс родственника в учреждении следующими способами:</h2>
                        <div className="balance__ctl">
                        <div className="balance__strok">
                            <div className="balance__bank">
                                <img src={qiwi} alt=""/>
                                <p>Терминал<br/>
                                    Qiwi</p>
                            </div>
                            <div className="balance__bank">
                                <img src={master} alt=""/>
                                <p>Банковские карты<br/>
                                    MasterCard, American Express</p>
                            </div>
                            <div className="balance__bank">
                                <img src={visa} alt=""/>
                                <p>Банковские карты Visa<br/>
                                American Express</p>
                            </div>
                        </div>
                        <div className="balance__strok">
                            <div className="balance__bank">
                                <img src={atf} alt=""/>
                                <p>Интернет <br/>банкинг<br/>
                                    АТФ24</p>
                            </div>
                            <div className="balance__bank">
                                <img src={alfa} alt=""/>
                                <p>Интернет Банкинг AlfaBank</p>
                            </div>
                            <div className="balance__bank">
                                <img src={rbk} alt=""/>
                                <p>Интернет Банкинг<br/>
                                     RBK банк</p>
                            </div>
                        </div>
                        <div className="balance__strok">
                            <div className="balance__bank">
                                <img src={qiwi} alt=""/>
                                <p>Терминал<br/>
                                    Qiwi</p>
                            </div>
                            <div className="balance__bank">
                                <img src={master} alt=""/>
                                <p>Банковские карты<br/>
                                    MasterCard, American Express</p>
                            </div>
                            <div className="balance__bank">
                                <img src={visa} alt=""/>
                                <p>Банковские карты Visa<br/>
                                    American Express</p>
                            </div>
                        </div>
                        </div>
                        <p>Помимо этого, можно в любом отделении банка, предъявив им <br/>
                            <span>"Реквизиты для перечисления" </span>  (справа) перечислить средства на <br/>
                            собственный баланс (на сайте) или же напрямую пополнить Логин родственника.<br/><br/>

                            Если у вас остались вопросы, звоните к нам и мы ответим на все ваши вопросы.</p>
                    </div>

                    <div className="balance__right">
                        <img src={rec} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Balance;