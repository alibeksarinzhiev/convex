import React, {useContext} from 'react';
import './vegetable.scss';
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";
import {CustomContext} from "../../../../Context";
import {Link} from "react-router-dom";
import img from "../../../../img/5d3eee44c3e1b.jpg";

const Vegetable = () => {
    const {vegetable,addVegetable,} = useContext(CustomContext)

    return (
        <div className='vegetable'>
            <div className="container">
                <div className="vegetable__box">
                    <h1>Овощные</h1>
                    <div className="vegetable__Line"></div>
                    <div className='cart__st'>
                        {vegetable.map((el)=>(
                            <div className='cart__goods'>
                                <h2>{el.title}</h2>
                                <Link to={`/product/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>
                                <h3>{el.price} coм</h3>
                                <p>{el.size} кг</p>
                                <button>В корзину</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vegetable;