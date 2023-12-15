import React from 'react';
import './details.scss';
import img from '../../../img/Rectangle 94.png'

const Details = () => {
    return (
        <section className='details'>
            <div className="container">
                <div className="details__box">
                    <h3>Новости / Доставка товаров и продуктов питания в СИЗО и Колонии Алматы</h3>
                    <div className="details__top">
                        <h2>Доставка товаров и продуктов питания
                            в СИЗО и Колонии Алматы</h2>
                        <p>Дата публикации: 19.04.2020 18:37</p>
                    </div>
                    <img src={img} alt=""/>
                    <p>Все что нужно сделать Вашему близкому человеку - подойти к установленному на территории СИЗО/ИУ Терминалу и зарегистрироваться.⠀<br/> <br/>

                        ✅ Далее вы получите СМС с его Логином для пополнения баланса<br/>
                        ✅ Оформите заказ на его Логин (доступно только в СИЗО)<br/><br/>

                        Наш проект реализован при поддержке Комитета УИС МВД РК.</p>
                </div>
            </div>
        </section>
    );
};

export default Details;