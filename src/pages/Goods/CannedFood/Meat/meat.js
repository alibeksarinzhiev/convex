import React, {useContext} from 'react';
import './meat.scss'
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Meat = () => {
    const {product} = useContext(CustomContext)

    return (
        <div className='meat'>
            <div className="container">
                <div className="meat__box">
                    <h1>Мясные</h1>
                    <div className="meat__Line"></div>
                    <div className='cart__st'>
                        {product.filter((el)=>(
                            el.category === 'meat'
                        ))
                            .map((el)=>(
                            <Cart el={el}/>
                        ))}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Meat;