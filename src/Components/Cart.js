import React from 'react';
import './cart.scss'
import img from "../pages/Search/images/234557-konina_ulan_tushenaya_vysshii_sort_325_g.jpg";

const Cart = () => {
    return (
        <div className="product__cart">
            <img src={img} alt=""/>
            <h4>Конина тушеная Улан, есть
                возможность в 2 строки</h4>
            <h3>В наличии: 11 шт.</h3>
            <p>Вес: 130гр</p>
            <div className="search__coin">
                <p>500 сом</p>
                <button>В корзину</button>
            </div>
        </div>
    );
};

export default Cart;