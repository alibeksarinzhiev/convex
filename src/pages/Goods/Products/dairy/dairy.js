import React, {useContext} from 'react';
import './dairy.scss'
import {CustomContext} from "../../../../Context";
import Cart from "../../../../Components/Cart";

const Dairy = () => {
    const {product,} = useContext(CustomContext)

    return (
        <div className='dairy'>
            <div className="container">
                <div className="dairy__box">
                    <h1>Молочные продукты</h1>
                    <div className="dairy__Line"></div>
                    <div className='cart__st'>
                        {product.filter((el)=>(
                            el.category === 'dairy'
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

export default Dairy;