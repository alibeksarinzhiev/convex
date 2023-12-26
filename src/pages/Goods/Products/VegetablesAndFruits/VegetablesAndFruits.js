import React, {useContext} from 'react';
import './VegetablesAndFruits.scss'
import {CustomContext} from "../../../../Context";
import {Link} from "react-router-dom"

const VegetablesAndFruits = () => {
    const {vegetables,addVegetables,fruits,addFruits,basket,plusOne,deleteObject} = useContext(CustomContext)


    return (
        <section className='vegetables'>
            <div className="container">
                <div className="vegetables__box">
                    <h1>Овощи и фрукты</h1>
                    <div className="vegetables__Line"></div>
                    <div className="vegetables__products">
                        {vegetables.map((el)=>(
                            <div>
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
                            </div>
                        ))}
                        {fruits.map((el)=>(
                            <div>
                                <Link to={`/product/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>
                                <h2>{el.title}</h2>
                                <p>{el.description}</p>
                                <h3>{el.price} сом/кг</h3>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default VegetablesAndFruits;