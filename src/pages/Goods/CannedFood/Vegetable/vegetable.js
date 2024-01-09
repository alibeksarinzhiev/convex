import React, {useContext} from 'react';
import './vegetable.scss';
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Vegetable = () => {
    const {product} = useContext(CustomContext)

    return (
        <div className='vegetable'>
            <div className="container">
                <div className="vegetable__box">
                    <h1>Овощные</h1>
                    <div className="vegetable__Line"></div>
                    <div className='cart__st'>
                        {product.filter((el)=>(
                            el.category === 'vegetables'
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

export default Vegetable;