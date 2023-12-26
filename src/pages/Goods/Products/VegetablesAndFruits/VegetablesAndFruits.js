import React, {useContext} from 'react';
import './VegetablesAndFruits.scss'
import {CustomContext} from "../../../../Context";
import {Link} from "react-router-dom"
import img from "../../../../img/5d3eee44c3e1b.jpg";


const VegetablesAndFruits = () => {
    const {vegetables,addVegetables,fruits,addFruits,basket,plusOne,deleteObject} = useContext(CustomContext)


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
                                <h2>{el.title}</h2>
                                <p>{el.description}</p>
                                <h3>{el.price} сом/кг</h3>
                                {basket.find(item => item.id === el.id)
                                    ?
                                    <div>
                                        <button onClick={()=>deleteObject(el.id)}>удалить из корзины</button>

                                        <button onClick={()=>plusOne(el.id)} >+</button>

                                    </div>

                                    :
                                    <button onClick={() => addVegetables(el.id)}>Добавить в корзину</button>
                                }

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