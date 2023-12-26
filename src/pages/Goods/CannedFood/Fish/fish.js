import React, {useContext} from 'react';
import './fish.scss';
import CartStroka from "../../../../Components/cart__stroka";
import {CustomContext} from "../../../../Context";
import {Link} from "react-router-dom";
import img from "../../../../img/5d3eee44c3e1b.jpg";

const Fish = () => {
    const {fish,addFish,} = useContext(CustomContext)

    return (
        <div className='fish'>
            <div className="container">
                <div className="fish__box">
                    <h1>Рыбные</h1>
                    <div className="fish__Line"></div>
                    <div className='cart__st'>
                        {fish.map((el)=>(
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

export default Fish;