import React, {useContext} from 'react';
import './cart.scss'
import img from "../pages/Search/images/234557-konina_ulan_tushenaya_vysshii_sort_325_g.jpg";
import {Link} from "react-router-dom";
import {CustomContext} from "../Context";

const Cart = ({el}) => {
    const {basket,plusOne,minusOne,deleteObject,addBasket} = useContext(CustomContext)


    return (
        <div className='cart__goods'>
            <h2>{el.title}</h2>
            <Link to={`/product/${el.id}`}>
                <img src={el.image} alt=""/>
            </Link>
            <h2>{el.title}</h2>
            <p>{el.description.split(' ').slice(0,5).join(' ')}</p>
            <h3>{el.price} сом/кг</h3>
            {basket.find(item => item.id === el.id)
                ?
                <div>
                    <button onClick={()=>minusOne(el.id)} >-</button>
                    <button onClick={()=>deleteObject(el.id)}>удалить из корзины</button>
                    <button onClick={()=>plusOne(el.id)} >+</button>
                </div>

                :
                <button onClick={() => addBasket(el.id)}>Добавить в корзину</button>
            }
        </div>
    );
};

export default Cart;