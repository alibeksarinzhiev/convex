import React, {useContext} from 'react';
import './sandwich.scss'
import {Link} from "react-router-dom";
import img from "../../../../img/5d3eee44c3e1b.jpg";
import {CustomContext} from "../../../../Context";

const Sandwich = () => {
    const {sandwich,addSandwich,} = useContext(CustomContext)

    return (
        <div className='sandwich'>
            <div className="container">
                <div className="sandwich__box">
                    <h1>Сэндвичи</h1>
                    <div className="sandwich__Line"></div>
                    <div className='cart__st'>
                        {sandwich.map((el)=>(
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

export default Sandwich;