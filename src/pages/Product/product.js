import React from 'react';
import './product.scss'
import img from '../../img/image 3.png'

const Product = () => {
    return (
        <div>
            <div className="container">
                <p className="way">Главная / Еда / Консервы / Говядина тушеная Улан высший сорт </p>
                <div className="tusha">
                    <img src={img} alt=""/>
                    <div className="about">
                        <h2>
                            Говядина тушеная Улан в/с
                        </h2>
                        <div className="h2o">
                            <h3>750 Сом</h3>
                            <h4>1700 Сом</h4>
                        </div>
                        <div className="weight">
                            <h5>Вес:</h5>
                            <h6>395гр.</h6>
                        </div>
                        <div className="quantity">
                            <p>Товар доступен:</p>
                            <h6> 11 шт.</h6>
                        </div>
                        <button className='product__VBaskec'>
                            В корзину
                        </button>
                        <p className="aboutproduct">
                            Продукт имеет высокие сроки хранения,
                            а также не требует дополнительных условий при хранении.
                            Кроме того, эта тушенка состоит исключительно из натуральных ингредиентов.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;