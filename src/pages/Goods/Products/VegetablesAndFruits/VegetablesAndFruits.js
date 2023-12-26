import React, {useContext} from 'react';
import './VegetablesAndFruits.scss'
import {CustomContext} from "../../../../Context";
import {Link} from "react-router-dom"
import img from "../../../../img/5d3eee44c3e1b.jpg";
import {motion} from "framer-motion";

const VegetablesAndFruits = () => {
    const {vegetables,addVegetables,fruits,addFruits} = useContext(CustomContext)


    return (
        <section className='vegetables'>
            <div className="container">
                <div className="vegetables__box">
                    <h1>Овощи и фрукты</h1>
                    <div className="vegetables__Line"></div>
                    <div className='cart__st'>
                        {vegetables.map((el)=>(
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
                        {fruits.map((el)=>(
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
        </section>
    );
};

export default VegetablesAndFruits;