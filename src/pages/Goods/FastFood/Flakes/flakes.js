import React, {useContext} from 'react';
import './flakes.scss'
import {Link} from "react-router-dom";
import img from "../../../../img/5d3eee44c3e1b.jpg";
import {CustomContext} from "../../../../Context";

const Flakes = () => {
    const {flakes,addFlakes,} = useContext(CustomContext)

    return (
        <div className='flakes'>
            <div className="container">
                <div className="flakes__box">
                    <h1>Хлопья</h1>
                    <div className="flakes__Line"></div>
                    <div className='cart__st'>
                        {flakes.map((el)=>(
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

export default Flakes;