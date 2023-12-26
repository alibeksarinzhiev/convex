import React, {useContext} from 'react';
import './grocery.scss'
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";
import {CustomContext} from "../../../../Context";
import {Link} from "react-router-dom";
import img from "../../../../img/5d3eee44c3e1b.jpg";

const Grocery = () => {
    const {grocery,addGrocery,} = useContext(CustomContext)

    return (
        <div className='grocery'>
            <div className="container">
                <div className="grocery__box">
                <h1>Бакалея</h1>
                <div className="grocery__Line"></div>
                    <div className='cart__st'>
                        {grocery.map((el)=>(
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

export default Grocery;