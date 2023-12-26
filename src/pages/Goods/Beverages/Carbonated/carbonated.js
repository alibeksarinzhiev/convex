import React, {useContext} from 'react';
import './carbonated.scss'
import CartStroka from "../../../../Components/cart__stroka";
import {Link} from "react-router-dom";
import img from "../../../../img/5d3eee44c3e1b.jpg";
import {CustomContext} from "../../../../Context";

const Carbonated = () => {
    const {carbonated,addCarbonated,} = useContext(CustomContext)

    return (
        <div className='carbonated'>
            <div className="container">
                <div className="carbonated__box">
                    <h1>Газированные</h1>
                    <div className="carbonated__Line"></div>
                    <div className='cart__st'>
                        {carbonated.map((el)=>(
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

export default Carbonated;