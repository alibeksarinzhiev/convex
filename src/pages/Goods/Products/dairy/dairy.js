import React, {useContext} from 'react';
import './dairy.scss'
import {Link} from "react-router-dom";
import img from "../../../../img/5d3eee44c3e1b.jpg";
import {CustomContext} from "../../../../Context";

const Dairy = () => {
    const {dairy,addDairy,} = useContext(CustomContext)

    return (
        <div className='dairy'>
            <div className="container">
                <div className="dairy__box">
                    <h1>Молочные продукты</h1>
                    <div className="dairy__Line"></div>
                    <div className='cart__st'>
                        {dairy.map((el)=>(
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

export default Dairy;