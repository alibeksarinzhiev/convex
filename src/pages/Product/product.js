import React, {useEffect, useState} from 'react';
import './product.scss'
import {useLocation} from "react-router-dom";
import axios from "axios";

const Product = () => {
    const [oneProduct,setOneProduct] = useState({})
    const id = useLocation().pathname.split('/').at(-1)
    useEffect(()=>{
        axios(`http://localhost:8080/product_convex/${id}`)
            .then(({data})=>setOneProduct(data))
    },[])
    return (
        <div>
            <div className="container">
                <p className="way">Главная / Еда / Консервы / Говядина тушеная Улан высший сорт </p>
                <div className="tusha">
                    <img src={'../../../' + oneProduct.image} alt=""/>
                    <div className="about">
                        <h2>
                            {oneProduct.title}
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