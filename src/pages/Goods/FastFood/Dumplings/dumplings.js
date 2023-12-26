import React, {useContext} from 'react';
import './dumplings.scss'
import CartGoods from "../../../../Components/Cart__goods";
import CartStroka from "../../../../Components/cart__stroka";
import {Link} from "react-router-dom";
import img from "../../../../img/5d3eee44c3e1b.jpg";
import {CustomContext} from "../../../../Context";

const Dumplings = () => {
    const {dumplings,addDumplings,} = useContext(CustomContext)

    return (
        <div className='dumplinks'>
            <div className="container">
                <div className="dumplinks__box">
                    <h1>Пельмени</h1>
                    <div className="dumplinks__Line"></div>
                    <div className='cart__st'>
                        {dumplings.map((el)=>(
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

export default Dumplings;