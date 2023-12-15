import React from 'react';
import './contacts.scss'
import img from '../../img/icons8-телефон-48.png'
import ima from '../../img/Group 3.png'

const Contacts = () => {
    return (
        <section className='contacts'>
            <div className="container">
                <div className="contacts__box">
                    <div className="contacts__left">
                        <h2>Контакты</h2>
                        <p>По вопросам работы электронного магазина воспользуйтесь
                            "формой обратной связи", либо звоните по телефонам: </p>
                        <div className="contacts__num">
                            <img src={img} alt=""/>
                            <h4>8 727 225 5011</h4>
                            <p>Пн-Пт: 9:00 - 18:00 / <span>Сб-Вс выходной</span></p>
                        </div>
                        <div className="contacts__num">
                            <img src={img} alt=""/>
                            <h4>8 887 233 5652</h4>
                            <p>Пн-Пт: 9:00 - 18:00 / <span>Сб-Вс выходной</span></p>
                        </div>
                        <div className="contacts__img">
                            <h4>Бесплатный звонок со всех операторов</h4>
                            <img src={ima} alt=""/>
                        </div>
                    </div>

                    <div className="contacts__right">
                        <h2>Форма обратной связи</h2>
                        <div className="contacts__name">
                            <h3>Фамилия и имя*</h3>
                            <input type="text" placeholder='Введите вашу фамилию и имя'/>
                        </div>
                        <div className="contacts__numb">
                            <h3>Телефон*</h3>
                            <input type="number" placeholder='Введите ваш номер телефона'/>
                        </div>
                        <div className="contacts__login">
                            <h3>Email*</h3>
                            <input type="email" placeholder='Введите вашу почту'/>
                        </div>
                        <div className="contacts__sms">
                            <h3>Ваше сообщение*</h3>
                            <input type="text" placeholder='Напишите нам'/>
                        </div>
                        <div className="contacts__ic">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.84747 2.49556C9.40844 0.93317 11.9411 0.933169 13.5032 2.49527C15.0252 4.01731 15.0643 6.46078 13.6203 8.03008L13.4948 8.16166L7.62816 14.0271L7.60378 14.0473C6.62962 14.9251 5.12696 14.8953 4.18871 13.9571C3.30936 13.0777 3.22795 11.7026 3.94447 10.7315C3.96004 10.7012 3.97887 10.672 4.00101 10.6446L4.03671 10.6049L4.09465 10.5464L4.18871 10.4478L4.19065 10.4497L9.14781 5.48015C9.32508 5.3024 9.60284 5.2859 9.79877 5.43087L9.85492 5.47921C10.0327 5.65649 10.0492 5.93424 9.90419 6.13017L9.85585 6.18632L4.79278 11.2617C4.31435 11.8454 4.34761 12.7083 4.89254 13.2532C5.44525 13.8059 6.32502 13.8323 6.90887 13.3322L12.7973 7.44521C13.9677 6.27344 13.9677 4.37395 12.7961 3.20237C11.6611 2.06741 9.84303 2.03194 8.66538 3.09597L8.55345 3.20237L8.54509 3.21191L2.18754 9.56946C1.99228 9.76473 1.67569 9.76473 1.48043 9.56946C1.30292 9.39195 1.28678 9.11418 1.43202 8.91844L1.48043 8.86236L7.84635 2.49527L7.84747 2.49556Z" fill="#212121"/>
                            </svg>
                            <p>Прикрепить файл</p>
                        </div>
                        <div className="contacts__kn">
                            <button>Отправить</button>
                            <h3>Отмена</h3>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;